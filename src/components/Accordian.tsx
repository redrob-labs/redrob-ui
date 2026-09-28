// Standard pakcages
import React, { FC, KeyboardEvent, ReactNode, useState } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { DeleteIcon, EditIcon } from '../icons';
import IconButton from './IconButton';
import Tag from './Tag';

// headlessui - Disclosure로 적용해보았으나 open될때 동기화(mode single)이 불가하여 div로 작업

// Prop Types
export interface AccordianType {
  /** id - need to mention, when you need to scroll to id */
  id: string;
  /** title */
  title: ReactNode;
  /** If 'true' the pannel expanded */
  expanded: boolean;
  /** Trigger when the accordian clicked */
  onClick?: (id: string) => void;
  /** Accordian contents */
  children: ReactNode;
  /** Trigger when the accordian deleted */
  onDelete?: (id: string) => void;
  /** Trigger when the accordian edited */
  onEdit?: (id: string, expanded: boolean) => void;
  /** Trigger when the accordian moved */
  onMove?: (id: string, direction: 'up' | 'down') => void;
  /** If 'true' tag shown */
  tag?: boolean;
}

// Prop Types
export interface AccordianGroupType {
  /** accordians */
  accordians: {
    id: string;
    title: ReactNode;
    content: ReactNode;
    tag?: boolean;
  }[];
  /** mode - if 'multi' all accordians possible to open */
  mode?: 'single' | 'multi';
  /** trigger */
  onToggle?: (id: string, expanded: boolean) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, expanded: boolean) => void; // Edit 관련 이벤트
}

const Accordian: FC<AccordianType & { index: number; count: number }> = (
  props: AccordianType
) => {
  /** props - state */
  const { id, title, expanded, children, tag = false } = props;
  /** props - action */
  const { onClick, onDelete, onEdit } = props;

  /** const - clsx */
  const rootClasses = clsx([
    'min-w-[800px] border border-grayscale-200 rounded bg-white cursor-pointer',
  ]);
  /** custom handlers */

  /** 웹접근성 */
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) =>
    e.key === 'Enter' && onClick && onClick(id);

  const handleClick = () => onClick && onClick(id);
  return (
    <div className={rootClasses}>
      <div
        id={id}
        role='button'
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={`${id}-panel`}
        className={clsx([
          'inline-block p-6 flex gap-x-3 items-center justify-between w-full rounded-t',
          'bg-grayscale-800 bg-opacity-0 text-grayscale-600',
          'hover:bg-opacity-[8%] active:bg-opacity-[16%] active:text-grayscale-900',
          {
            'text-grayscale-900 bg-opacity-[8%]': expanded,
          },
        ])}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <div className='flex gap-x-2 items-center'>
          <div className='flex gap-x-2 items-center'>
            <h4 className='text-h4-bold truncate'>{title}</h4>
            <div
              className={clsx({
                hidden: !tag,
              })}
            >
              <Tag text='label' variant='infoStatus' />
            </div>
          </div>
        </div>
        <div className='flex gap-x-2 items-center'>
          {onEdit && (
            <IconButton
              adornment={<EditIcon />}
              name='edit'
              onClick={e => {
                e.stopPropagation();
                onEdit(id, true);
              }}
            />
          )}
          {onDelete && (
            <IconButton
              adornment={<DeleteIcon />}
              name='delete'
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                onDelete(id);
              }}
            />
          )}
        </div>
      </div>
      <div
        className={clsx(
          ['bg-white p-6 rounded-b border-t border-grayscale-200'],
          {
            hidden: !expanded,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

const AccordianGroup: FC<AccordianGroupType> = (props: AccordianGroupType) => {
  /** props - state */
  const { accordians: initialAccordians, mode = 'multi' } = props;
  /** props - action */
  const { onToggle, onDelete, onEdit } = props;

  /** useState hooks */
  const [accordians, setAccordians] = useState(initialAccordians);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  /** custom handlers */
  const handleToggle = (id: string) => {
    handleMode(mode, id);
    if (onToggle) {
      const isExpanded = expandedIds.includes(id);
      onToggle(id, !isExpanded);
    }
  };

  const handleEdit = (id: string, expanded: boolean) => {
    handleMode(mode, id);
    if (onEdit) {
      const isExpanded = expandedIds.includes(id);
      onEdit(id, !isExpanded);
    }
  };

  const handleMode = (mode: 'single' | 'multi', id: string) => {
    if (mode === 'single') {
      setExpandedIds(prev => (prev.includes(id) ? [] : [id]));
    } else {
      setExpandedIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    }
  };

  const handleMove = (id: string, direction: 'up' | 'down') => {
    const index = accordians.findIndex(item => item.id === id);

    if (index === -1) return;

    let newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= accordians.length) return;

    const updatedAccordians = [...accordians];
    const [movedItem] = updatedAccordians.splice(index, 1);
    updatedAccordians.splice(newIndex, 0, movedItem);

    setAccordians(updatedAccordians);
  };

  const handleDelete = (id: string) => {
    const updatedAccordians = accordians.filter(item => item.id !== id);
    setAccordians(updatedAccordians);

    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <div className='space-y-4'>
      {accordians.map(({ id, title, content, tag }, index) => (
        <Accordian
          key={id}
          id={id}
          title={title}
          expanded={expandedIds.includes(id)}
          tag={tag}
          onClick={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onMove={(id, direction) => handleMove(id, direction)}
          index={index}
          count={accordians?.length}
        >
          {content}
        </Accordian>
      ))}
    </div>
  );
};

export { Accordian, AccordianGroup };
