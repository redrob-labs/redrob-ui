import * as React from 'react';
import { cx } from '../../internal/cx';
import { OPINION_MODES } from '../../internal/safeguards';

export interface OpinionMode {
  value: string;
  label?: React.ReactNode;
  /** What this mode costs and when it runs. */
  detail?: React.ReactNode;
}

export interface SecondOpinionSettingProps {
  options?: OpinionMode[];
  value?: string;
  defaultValue?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  label?: string;
  foot?: React.ReactNode;
  className?: string;
  onChange?: (value: string, mode: OpinionMode) => void;
}

/**
 * When two other AIs check the answer.
 *
 * The explanation says what happens to their findings: disagreements are marked in the answer, additions are
 * appended and attributed. A crosscheck whose output is silently merged is a crosscheck nobody can weigh.
 *
 * `always` states the real cost - about twenty seconds and a few cents per answer. A safeguard whose price is
 * hidden gets switched off the first time somebody notices the bill, which is the worst moment to learn about it.
 */
export function SecondOpinionSetting(props: SecondOpinionSettingProps): React.ReactElement {
  const modes = props.options || OPINION_MODES;
  const [held, setHeld] = React.useState(props.defaultValue || 'auto');
  const value = props.value !== undefined ? props.value : held;
  const cur = modes.filter((m) => m.value === value)[0] || modes[0];

  return React.createElement('div', { className: cx('rr-opset', props.className) }, [
    React.createElement(
      'p',
      { key: 'h', className: 'rr-opset__title' },
      props.title || 'A second opinion from two other AIs',
    ),
    React.createElement(
      'p',
      { key: 'l', className: 'rr-panellede' },
      props.lede ||
        'After the answer arrives, two AIs from other companies read it. What they see differently is marked in the answer, and what they think is missing is added at the end, marked as theirs.',
    ),
    React.createElement(
      'div',
      { key: 's', className: 'rr-seg', role: 'radiogroup', 'aria-label': props.label || 'Second opinion' },
      modes.map((m) =>
        React.createElement(
          'button',
          {
            key: m.value,
            type: 'button',
            role: 'radio',
            'aria-checked': String(value === m.value),
            onClick: () => {
              if (props.value === undefined) setHeld(m.value);
              if (props.onChange) props.onChange(m.value, m);
            },
          },
          m.label,
        ),
      ),
    ),
    React.createElement('p', { key: 'd', className: 'rr-opset__note' }, cur.detail),
    props.foot ? React.createElement('div', { key: 'f', className: 'rr-panelfoot' }, props.foot) : null,
  ]);
}

export default SecondOpinionSetting;
