import * as React from 'react';
import { cx } from '../../internal/cx';
import { nextId } from '../../internal/ids';
import { PubItem, PubStory, pubYear } from '../../internal/publishing';

export interface PostListProps {
  items?: PubStory[];
  /** Pass `false` on a page where the first item must not be promoted. */
  lead?: boolean;
  /** `'year'` breaks the rest into year sections with real headings. */
  group?: 'year';
  className?: string;
}

/**
 * An index of published stories: a lead, then the rest.
 *
 * Year grouping emits a real `section` per year with its own heading and `aria-labelledby`, and the items inside drop
 * to `h3`. The grouping is therefore in the document rather than in the spacing, so an archive can be navigated by
 * heading instead of by scrolling and guessing where one year ends.
 *
 * `lead={false}` exists because promotion is editorial. On a page where the newest item is not the most important
 * one, a hard-coded lead would make that claim anyway.
 *
 * Renders null when empty rather than an empty list element.
 */
export function PostList(props: PostListProps): React.ReactElement | null {
  const yid = React.useRef(nextId('rr-y')).current;
  const items = props.items || [];
  if (!items.length) return null;

  const lead = props.lead === false ? null : items[0];
  const rest = lead ? items.slice(1) : items;
  const grouped = props.group === 'year';
  const groups: Array<{ year: string; items: PubStory[] }> = [];

  if (grouped) {
    rest.forEach((p) => {
      const y = pubYear(p);
      let g = groups[groups.length - 1];
      if (!g || g.year !== y) {
        g = { year: y, items: [] };
        groups.push(g);
      }
      g.items.push(p);
    });
  }

  function list(arr: PubStory[], H: string): React.ReactElement {
    return React.createElement(
      'ul',
      { className: 'rr-posts__list' },
      arr.map((p, i) =>
        React.createElement(
          'li',
          { key: p.id || `${p.href}${i}`, className: 'rr-posts__item' },
          React.createElement(PubItem, { item: p, heading: H }),
        ),
      ),
    );
  }

  return React.createElement('div', { className: cx('rr-posts', props.className) }, [
    lead
      ? React.createElement(
          'div',
          { className: 'rr-posts__lead', key: 'l' },
          React.createElement(PubItem, { item: lead, lead: true, heading: 'h2' }),
        )
      : null,
    rest.length
      ? grouped
        ? React.createElement(
            'div',
            { className: 'rr-posts__groups', key: 'g' },
            groups.map((g) =>
              React.createElement(
                'section',
                { className: 'rr-posts__group', key: g.year, 'aria-labelledby': `${yid}-${g.year}` },
                [
                  React.createElement(
                    'h2',
                    { className: 'rr-posts__year', id: `${yid}-${g.year}`, key: 'y' },
                    g.year,
                  ),
                  React.createElement('div', { key: 'l' }, list(g.items, 'h3')),
                ],
              ),
            ),
          )
        : React.createElement('div', { key: 'r' }, list(rest, 'h2'))
      : null,
  ]);
}

export default PostList;
