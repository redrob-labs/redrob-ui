// Standard pacakges
import React, {
  FunctionComponent,
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  RefCallback,
  cloneElement,
  useEffect,
  useRef,
} from "react";

// PropTypes
type FocusEvents = "focusin" | "focusout";
type MouseEvents = "click" | "mousedown" | "mouseup";
type TouchEvents = "touchstart" | "touchend";
type Events = FocusEvent | MouseEvent | TouchEvent;

interface Props extends HTMLAttributes<HTMLElement> {
  /** Event handler for clicks outside the component */
  onClickAway: (event: Events) => void;
  /** Focus event handler options */
  focusEvent?: FocusEvents;
  /** Mouse event handler options */
  mouseEvent?: MouseEvents;
  /** Touch event handler options */
  touchEvent?: TouchEvents;
  /** Children to be included within the component */
  children: ReactElement<any>;
}

const eventTypeMapping = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd",
};

const ClickAwayListener: FunctionComponent<Props> = (props: Props) => {
  /** props - state */
  const {
    children,
    focusEvent = "focusin",
    mouseEvent = "click",
    touchEvent = "touchend",
  } = props;

  /** props - action */
  const { onClickAway } = props;

  /** useRef hooks */
  const node = useRef<HTMLElement | null>(null);
  const bubbledEventTarget = useRef<EventTarget | null>(null);
  const mountedRef = useRef(false);

  /**
   * Prevents the bubbled event from getting triggered immediately
   * https://github.com/facebook/react/issues/20074
   */
  /** useEffect hooks */
  useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
    }, 0);

    return () => {
      mountedRef.current = false;
    };
  }, []);

  /** custom handlers */
  const handleBubbledEvents =
    (type: string) =>
    (event: Events): void => {
      bubbledEventTarget.current = event.target;

      const handler = children?.props[type];

      if (handler) {
        handler(event);
      }
    };

  const handleChildRef = (childRef: HTMLElement) => {
    node.current = childRef;

    let { ref } = children as typeof children & {
      ref: RefCallback<HTMLElement> | MutableRefObject<HTMLElement>;
    };

    if (typeof ref === "function") {
      ref(childRef);
    } else if (ref) {
      ref.current = childRef;
    }
  };

  useEffect(() => {
    const nodeDocument = node.current?.ownerDocument ?? document;

    const handleEvents = (event: Events): void => {
      if (!mountedRef.current) return;
      if (
        node?.current?.contains(event.target as Node) ||
        bubbledEventTarget?.current === event.target ||
        !nodeDocument?.contains(event.target as Node)
      ) {
        return;
      }

      onClickAway(event);
    };

    nodeDocument.addEventListener(mouseEvent, handleEvents);
    nodeDocument.addEventListener(touchEvent, handleEvents);
    nodeDocument.addEventListener(focusEvent, handleEvents);

    return () => {
      nodeDocument.removeEventListener(mouseEvent, handleEvents);
      nodeDocument.removeEventListener(touchEvent, handleEvents);
      nodeDocument.removeEventListener(focusEvent, handleEvents);
    };
  }, [focusEvent, mouseEvent, onClickAway, touchEvent]);

  const mappedMouseEvent = eventTypeMapping[mouseEvent];
  const mappedTouchEvent = eventTypeMapping[touchEvent];
  const mappedFocusEvent = eventTypeMapping[focusEvent];

  return React.Children.only(
    cloneElement(children, {
      ref: handleChildRef,
      [mappedFocusEvent]: handleBubbledEvents(mappedFocusEvent),
      [mappedMouseEvent]: handleBubbledEvents(mappedMouseEvent),
      [mappedTouchEvent]: handleBubbledEvents(mappedTouchEvent),
    })
  );
};

export default ClickAwayListener;
