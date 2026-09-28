import * as React from 'react';
import { cx } from '../../internal/cx';
import { SCOPE_ICON, SCOPE_MODE } from '../../internal/harness';
import { icons, IconName } from '../../icons';
import { SectionMark } from '../SectionMark/SectionMark';

export interface Scope {
  kind?: 'files' | 'apps' | 'web' | 'computer' | 'memory';
  label?: string;
  mode?: 'read' | 'write' | 'none';
}

export interface ScopeBadgeProps {
  scopes?: Scope[];
  label?: string;
  className?: string;
}

/**
 * Everything an agent can reach, and whether it can change it.
 *
 * The mode is spelled out - "Can read", "Can read and write" - because read and write are a developer's words for
 * somebody else's files. A person granting access should not have to translate.
 *
 * Every scope is listed, including the ones that are read-only. A list that showed only the powerful grants would
 * make the total reach impossible to judge.
 */
export function ScopeBadge(props: ScopeBadgeProps): React.ReactElement {
  const scopes = props.scopes || [];

  return React.createElement(
    'div',
    {
      className: cx('rr-scope', props.className),
      role: 'group',
      'aria-label': props.label || 'What this agent can reach',
    },
    [
      props.label
        ? React.createElement(SectionMark, {
            key: 'm',
            label: [props.label],
            trailing: String(scopes.length),
          })
        : null,
      scopes.map((s, i) => {
        const Ico = icons[(SCOPE_ICON[s.kind as string] || 'shield') as IconName];
        const mode = s.mode || 'read';
        return React.createElement('div', { className: 'rr-scope__row', key: i }, [
          React.createElement(
            'span',
            { className: 'rr-scope__icon', key: 'i', 'aria-hidden': 'true' },
            React.createElement(Ico as never),
          ),
          React.createElement('span', { className: 'rr-scope__label', key: 'l', title: s.label }, s.label),
          React.createElement(
            'span',
            { className: `rr-scope__mode rr-scope__mode--${mode}`, key: 'm' },
            SCOPE_MODE[mode] || mode,
          ),
        ]);
      }),
    ],
  );
}

export default ScopeBadge;
