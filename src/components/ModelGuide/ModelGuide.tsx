import * as React from 'react';
import { cx } from '../../internal/cx';
import { useStableId } from '../../internal/ids';
import { docLocale } from '../../internal/datetime';
import { currencyFor, Effort, EffortLevel, EffortMeter, EffortNoteContext } from '../../internal/model';
import { EffortTune } from '../../internal/effort';
import { GUIDE_DIMS, GuideScore, GuideWeights, guidePrice, guideTotal } from '../../internal/guide';
import { icons } from '../../icons';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

export interface GuidePick {
  id: string;
  model?: string;
  harness?: string;
  /** The effort it was ranked at. */
  effort?: Effort;
  /** Every level a reader can try on it, the ranked one included. With two or more, the detail shows the effort control. */
  efforts?: EffortLevel[];
  why?: React.ReactNode;
  monthly?: number;
  score?: GuideScore;
  /** The raw measurement behind each dimension, keyed the same way as the score. */
  measured?: Record<string, React.ReactNode>;
  /** Label/value pairs: context window, cut-off, where it runs. */
  facts?: Array<[React.ReactNode, React.ReactNode]>;
  /** What the graders said. */
  note?: React.ReactNode;
  /** One real run: the prompt, the output, and whether it is illustrative. */
  sample?: { prompt?: React.ReactNode; output?: React.ReactNode; more?: React.ReactNode; illustrative?: boolean };
  runHref?: string;
}

export interface GuideTask {
  id: string;
  label?: string;
  title?: string;
  usage?: string;
  basis?: string;
  prompt?: React.ReactNode;
  formula?: string;
  weights?: GuideWeights;
  emptyText?: React.ReactNode;
  picks?: GuidePick[];
}

export interface GuideProfession {
  id: string;
  label?: string;
  disabled?: boolean;
  tasks?: GuideTask[];
}

export interface ModelGuideProps {
  professions?: GuideProfession[];
  limit?: number;
  locale?: string;
  currency?: string;
  rates?: Record<string, number>;
  currencyByLang?: Record<string, string>;
  source?: { name?: string; edition?: string; note?: string };
  weights?: GuideWeights;
  /** `advanced` shows the scores, the weights and the arithmetic. */
  mode?: 'simple' | 'advanced';
  defaultMode?: 'simple' | 'advanced';
  /** Controlled, so a ModelPicker can open the guide on its own task. */
  profession?: string;
  task?: string;
  defaultProfession?: string;
  defaultTask?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  /** How the testing works. Opened by default in advanced mode. */
  method?: React.ReactNode;
  modeLabel?: string;
  simpleLabel?: React.ReactNode;
  advancedLabel?: React.ReactNode;
  professionLabel?: string;
  taskLabel?: string;
  perLabel?: string;
  topLabel?: React.ReactNode;
  promptLabel?: React.ReactNode;
  outputLabel?: string;
  illustrativeLabel?: React.ReactNode;
  calcLabel?: React.ReactNode;
  noteLabel?: string;
  useLabel?: React.ReactNode;
  runLabel?: React.ReactNode;
  methodLabel?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  emptyText?: React.ReactNode;
  className?: string;
  onTaskChange?: (taskId: string | null, professionId: string) => void;
  onModeChange?: (mode: 'simple' | 'advanced') => void;
  /** `effort` is the level the reader tried on the pick, or `null` for the ranked one. */
  onUse?: (
    pick: GuidePick,
    context: { profession: GuideProfession; task: GuideTask; effort: EffortLevel | null },
  ) => void;
  /** "Try another effort" in the detail; `effortHint` is the line beside it. */
  effortLabel?: string;
  effortHint?: string;
  rankedLabel?: string;
  resetEffortLabel?: string;
  effortNote?: (context: EffortNoteContext) => React.ReactNode;
}

/**
 * The full comparison behind the ranking: what each model was asked, what it wrote, and how it scored.
 *
 * Two modes. Simple gives the order and a reason. Advanced shows the four dimension scores, the weights, the
 * arithmetic and the confidence interval - everything needed to disagree with the ranking. A ranking that
 * cannot be disagreed with is marketing, which is why the advanced view is a real view and not a footnote.
 *
 * Every pick carries one real run: the prompt, the whole output in its own scrolling region, and a marker when
 * the sample is illustrative rather than a verbatim capture. The output box is focusable so a keyboard can
 * scroll it.
 *
 * A task with no picks says "Not ranked yet" and when it will be, rather than rendering an empty list that
 * looks like a loading failure.
 */
export function ModelGuide(props: ModelGuideProps): React.ReactElement {
  const professions = props.professions || [];
  const limit = props.limit || 5;
  const locale = props.locale || docLocale();
  const base = props.currency || 'USD';
  const rates = props.rates || {};
  let shown = currencyFor(
    props.locale || (typeof document !== 'undefined' && document.documentElement.lang) || locale,
    props.currencyByLang,
  );
  if (shown !== base && rates[shown] == null) shown = base;
  const src = props.source || {};

  const firstProf = professions.filter((p) => !p.disabled)[0] || ({} as GuideProfession);
  const [profHeld, setProfHeld] = React.useState<string | undefined>(props.defaultProfession || firstProf.id);
  const profId = props.profession !== undefined ? props.profession : profHeld;
  const prof = professions.filter((p) => p.id === profId)[0] || firstProf;
  const tasks = prof.tasks || [];
  const [taskHeld, setTaskHeld] = React.useState<string | null | undefined>(
    props.defaultTask || (tasks[0] && tasks[0].id),
  );
  const taskId = props.task !== undefined ? props.task : taskHeld;
  const task = tasks.filter((t) => t.id === taskId)[0] || tasks[0] || ({} as GuideTask);
  const picks = (task.picks || []).slice(0, limit);

  const [modeHeld, setModeHeld] = React.useState<'simple' | 'advanced'>(props.defaultMode || 'simple');
  const mode = props.mode !== undefined ? props.mode : modeHeld;
  const [pickId, setPickId] = React.useState<string | null>(null);
  const current = picks.filter((k) => k.id === pickId)[0] || picks[0];
  // A level the reader tries on the open pick, or null for the ranked one; reset when the pick changes.
  const [tried, setTried] = React.useState<{ id: string | null; level: number | null }>({ id: null, level: null });
  const tryLevel = current && tried.id === current.id ? tried.level : null;
  function tryEffort(l: EffortLevel): void {
    const other = l.pick && current && l.pick !== current.id ? picks.filter((k) => k.id === l.pick)[0] : null;
    if (other) {
      setPickId(other.id);
      setTried({ id: null, level: null });
      return;
    }
    setTried({
      id: current.id,
      level: l.level == null || l.level === (current.effort || {}).level ? null : l.level,
    });
  }
  const w: GuideWeights =
    task.weights || props.weights || { quality: 0.55, reliability: 0.25, speed: 0.05, cost: 0.15 };
  const headId = useStableId('rr-guide');
  const adv = mode === 'advanced';

  function choose(pid: string, tid: string | null): void {
    if (props.profession === undefined) setProfHeld(pid);
    if (props.task === undefined) setTaskHeld(tid);
    setPickId(null);
    if (props.onTaskChange) props.onTaskChange(tid, pid);
  }

  function setMode(m: 'simple' | 'advanced'): void {
    if (props.mode === undefined) setModeHeld(m);
    if (props.onModeChange) props.onModeChange(m);
  }

  function modeSwitch(): React.ReactElement {
    return React.createElement(
      'div',
      // Returned into a children array, so it carries its own key.
      { key: 'mode', className: 'rr-guide__mode', role: 'radiogroup', 'aria-label': props.modeLabel || 'View' },
      (
        [
          ['simple', props.simpleLabel || 'Simple'],
          ['advanced', props.advancedLabel || 'Advanced'],
        ] as Array<['simple' | 'advanced', React.ReactNode]>
      ).map((m) =>
        React.createElement(
          'button',
          {
            key: m[0],
            type: 'button',
            role: 'radio',
            'aria-checked': String(mode === m[0]),
            className: 'rr-guide__modeopt',
            onClick: () => setMode(m[0]),
          },
          m[1],
        ),
      ),
    );
  }

  function row(k: GuidePick, i: number): React.ReactElement {
    const on = current && k.id === current.id;
    const total = guideTotal(k, w);
    return React.createElement(
      'li',
      { key: k.id },
      React.createElement(
        'button',
        {
          type: 'button',
          className: 'rr-guide__row',
          'aria-pressed': String(on),
          onClick: () => setPickId(k.id),
        },
        [
          React.createElement('span', { key: 'r', className: 'rr-model__rank' }, String(i + 1)),
          React.createElement('span', { key: 'b', className: 'rr-model__body' }, [
            React.createElement('span', { key: 'n', className: 'rr-model__name' }, [
              React.createElement('span', { key: 'm' }, k.model),
              React.createElement('span', { key: 'o', className: 'rr-model__on' }, `on ${k.harness}`),
            ]),
            React.createElement(EffortMeter, { key: 'e', effort: k.effort }),
            !adv && k.why ? React.createElement('span', { key: 'w', className: 'rr-model__why' }, k.why) : null,
            adv && k.score
              ? React.createElement(
                  'span',
                  { key: 's', className: 'rr-guide__bar', 'aria-hidden': 'true' },
                  GUIDE_DIMS.map((d) =>
                    React.createElement('span', {
                      key: d.key,
                      className: `rr-guide__seg rr-guide__seg--${d.key}`,
                      style: {
                        width: `${(w[d.key] || 0) * ((k.score as Record<string, number>)[d.key] || 0)}%`,
                      },
                    }),
                  ),
                )
              : null,
          ]),
          React.createElement('span', { key: 'p', className: 'rr-guide__rowend' }, [
            adv && total != null
              ? React.createElement('span', { key: 's', className: 'rr-guide__score' }, [
                  React.createElement('b', { key: 'v' }, total.toFixed(1)),
                  k.score && k.score.ci
                    ? React.createElement('span', { key: 'c' }, ` ±${k.score.ci.toFixed(1)}`)
                    : null,
                ])
              : React.createElement('span', { key: 'm', className: 'rr-model__price' }, [
                  guidePrice(k.monthly, shown, base, rates, locale),
                  React.createElement('span', { key: 'u', className: 'rr-model__per' }, props.perLabel || '/mo'),
                ]),
            adv
              ? React.createElement('span', { key: 'x', className: 'rr-guide__small' }, [
                  guidePrice(k.monthly, shown, base, rates, locale),
                  React.createElement('span', { key: 'u' }, props.perLabel || '/mo'),
                ])
              : null,
          ]),
        ],
      ),
    );
  }

  function breakdown(k: GuidePick): React.ReactElement {
    const total = guideTotal(k, w);
    const s = (k.score || {}) as Record<string, number>;
    const m = k.measured || {};
    const body: React.ReactNode[] = GUIDE_DIMS.map((d) =>
      React.createElement('tr', { key: d.key }, [
        React.createElement('th', { key: 'a', scope: 'row' }, [
          React.createElement('span', { key: 'k', className: `rr-guide__key rr-guide__seg--${d.key}` }),
          d.label,
        ]),
        React.createElement('td', { key: 'b' }, m[d.key] || '-'),
        React.createElement(
          'td',
          { key: 'c', className: 'rr-guide__num' },
          s[d.key] != null ? s[d.key].toFixed(1) : '-',
        ),
        React.createElement('td', { key: 'd', className: 'rr-guide__num' }, `× ${(w[d.key] || 0).toFixed(2)}`),
        React.createElement(
          'td',
          { key: 'e', className: 'rr-guide__num' },
          ((w[d.key] || 0) * (s[d.key] || 0)).toFixed(1),
        ),
      ]),
    );
    body.push(
      React.createElement('tr', { key: 't', className: 'rr-guide__totalrow' }, [
        React.createElement('th', { key: 'a', scope: 'row' }, 'Score'),
        React.createElement('td', { key: 'b' }, s.ci ? `95% interval ±${s.ci.toFixed(1)}` : ''),
        React.createElement('td', { key: 'c' }),
        React.createElement('td', { key: 'd' }),
        React.createElement(
          'td',
          { key: 'e', className: 'rr-guide__num' },
          total != null ? total.toFixed(1) : '-',
        ),
      ]),
    );
    return React.createElement('div', { key: 'calc', className: 'rr-guide__calc' }, [
      React.createElement(
        'p',
        { key: 'h', className: 'rr-guide__label' },
        props.calcLabel || 'How this score was calculated',
      ),
      React.createElement(
        'div',
        { key: 't', className: 'rr-guide__tablewrap' },
        React.createElement('table', { className: 'rr-guide__table' }, [
          React.createElement(
            'thead',
            { key: 'h' },
            React.createElement(
              'tr',
              null,
              ['Dimension', 'Measured', 'Score', 'Weight', 'Points'].map((c, i) =>
                React.createElement(
                  'th',
                  { key: i, scope: 'col', className: i > 1 ? 'rr-guide__num' : null },
                  c,
                ),
              ),
            ),
          ),
          React.createElement('tbody', { key: 'b' }, body),
        ]),
      ),
      task.formula
        ? React.createElement(
            'p',
            { key: 'f', className: 'rr-guide__formula' },
            React.createElement('code', null, task.formula),
          )
        : null,
      React.createElement(
        'dl',
        { key: 'd', className: 'rr-guide__facts' },
        (k.facts || []).map((f, i) =>
          React.createElement('div', { key: i }, [
            React.createElement('dt', { key: 't' }, f[0]),
            React.createElement('dd', { key: 'd' }, f[1]),
          ]),
        ),
      ),
      k.note
        ? React.createElement('p', { key: 'n', className: 'rr-guide__note' }, [
            React.createElement('b', { key: 'b' }, `${props.noteLabel || 'Graders’ note'} `),
            k.note,
          ])
        : null,
    ]);
  }

  function detail(k: GuidePick | undefined, i: number): React.ReactElement | null {
    if (!k) return null;
    const sample = k.sample || {};
    // Returned into the grid's children array beside the list, so it needs a key of its own.
    return React.createElement('div', { key: 'detail', className: 'rr-guide__detail', 'aria-live': 'polite' }, [
      React.createElement('div', { key: 'h', className: 'rr-guide__dhead' }, [
        React.createElement('div', { key: 'a' }, [
          React.createElement('p', { key: 'r', className: 'rr-guide__rank' }, [
            `#${i + 1} for ${(task.label || '').toLowerCase()}`,
            i === 0
              ? React.createElement(
                  Badge,
                  { key: 'b', tone: 'brand', size: 'sm' },
                  props.topLabel || 'Best pick',
                )
              : null,
          ]),
          React.createElement('h3', { key: 'n', className: 'rr-guide__dname' }, [
            k.model,
            React.createElement('span', { key: 'o' }, ` on ${k.harness}`),
          ]),
          React.createElement(EffortMeter, { key: 'e', effort: k.effort }),
        ]),
        React.createElement('div', { key: 'p', className: 'rr-guide__cost' }, [
          React.createElement('span', { key: 'v', className: 'rr-guide__costv' }, [
            guidePrice(k.monthly, shown, base, rates, locale),
            React.createElement('span', { key: 'u', className: 'rr-model__per' }, props.perLabel || '/mo'),
          ]),
          task.usage
            ? React.createElement('span', { key: 'u', className: 'rr-guide__costu' }, task.usage)
            : null,
        ]),
      ]),
      k.why ? React.createElement('p', { key: 'w', className: 'rr-guide__why' }, k.why) : null,
      k.efforts && k.efforts.length > 1
        ? React.createElement(EffortTune, {
            key: 'e',
            className: 'rr-guide__tune',
            pick: k,
            place: i + 1,
            chosen: tryLevel,
            onSelect: tryEffort,
            per: props.perLabel,
            note: props.effortNote,
            labels: {
              effort: props.effortLabel || 'Try another effort',
              ranked: props.rankedLabel,
              reset: props.resetEffortLabel,
            },
            price: (m: number) => guidePrice(m, shown, base, rates, locale, 'rr-effort__price'),
            title: props.effortHint || 'The sample below was written at the ranked effort.',
          })
        : null,
      React.createElement('div', { key: 's', className: 'rr-guide__sample' }, [
        React.createElement('div', { key: 'q', className: 'rr-guide__turn' }, [
          React.createElement(
            'p',
            { key: 'l', className: 'rr-guide__label' },
            props.promptLabel || 'What it was asked',
          ),
          React.createElement(
            'blockquote',
            { key: 't', className: 'rr-guide__prompt' },
            task.prompt || sample.prompt,
          ),
        ]),
        React.createElement('div', { key: 'a', className: 'rr-guide__turn' }, [
          React.createElement('p', { key: 'l', className: 'rr-guide__label' }, [
            props.outputLabel || 'What it wrote',
            sample.illustrative
              ? React.createElement(
                  'span',
                  { key: 'i', className: 'rr-guide__illus' },
                  props.illustrativeLabel || 'Sample output, illustrative',
                )
              : null,
          ]),
          React.createElement(
            'div',
            {
              key: 't',
              className: 'rr-guide__output',
              tabIndex: 0,
              role: 'region',
              'aria-label': `${props.outputLabel || 'What it wrote'}: ${k.model}`,
            },
            sample.output,
          ),
          sample.more ? React.createElement('p', { key: 'm', className: 'rr-guide__cut' }, sample.more) : null,
        ]),
      ]),
      adv ? breakdown(k) : null,
      React.createElement('div', { key: 'c', className: 'rr-guide__actions' }, [
        React.createElement(
          Button,
          {
            key: 'b',
            variant: 'primary',
            onClick: () => {
              const lv = tryLevel != null && k.efforts ? k.efforts.filter((l) => l.level === tryLevel)[0] : null;
              if (props.onUse) props.onUse(k, { profession: prof, task, effort: lv || null });
            },
          },
          props.useLabel || 'Use this in the chat',
        ),
        k.runHref
          ? React.createElement('a', { key: 'a', className: 'rr-guide__runlink', href: k.runHref }, [
              props.runLabel || 'See the full run',
              React.createElement(
                'span',
                { key: 'i', 'aria-hidden': 'true' },
                icons.arrowRight({ width: 14, height: 14 }),
              ),
            ])
          : null,
      ]),
    ]);
  }

  const meta = [src.name, src.edition, src.note].filter(Boolean).join(' · ');

  return React.createElement(
    'section',
    { className: cx('rr-guide', adv && 'rr-guide--advanced', props.className), 'aria-labelledby': headId },
    [
      React.createElement('div', { key: 'top', className: 'rr-guide__top' }, [
        React.createElement('div', { key: 'a' }, [
          React.createElement(
            'h2',
            { key: 't', id: headId, className: 'rr-guide__title' },
            props.title || 'Model Guide',
          ),
          props.lede ? React.createElement('p', { key: 'l', className: 'rr-guide__lede' }, props.lede) : null,
        ]),
        modeSwitch(),
      ]),
      React.createElement('div', { key: 'ask', className: 'rr-guide__ask' }, [
        React.createElement(Select, {
          key: 'p',
          size: 'sm',
          label: props.professionLabel || 'I work as',
          value: prof.id,
          options: professions.map((p) => ({
            value: p.id,
            label: p.label as string,
            disabled: !!p.disabled,
          })),
          onChange: (event: unknown) => {
            const target = (event as { target: { value: string } }).target;
            const next = professions.filter((p) => p.id === target.value)[0];
            choose(target.value, next && next.tasks && next.tasks[0] ? next.tasks[0].id : null);
          },
        }),
        React.createElement(Select, {
          key: 't',
          size: 'sm',
          label: props.taskLabel || 'I want to',
          value: task.id,
          options: tasks.map((t) => ({ value: t.id, label: t.label as string })),
          onChange: (event: unknown) => {
            const target = (event as { target: { value: string } }).target;
            choose(prof.id, target.value);
          },
        }),
      ]),
      React.createElement('div', { key: 'head', className: 'rr-guide__head' }, [
        React.createElement(
          'p',
          { key: 't', className: 'rr-guide__rtitle' },
          task.title || `Top ${limit} · ${prof.label || ''} · ${task.label || ''}`,
        ),
        React.createElement(
          'p',
          { key: 'm', className: 'rr-guide__meta' },
          [meta, task.basis].filter(Boolean).join(' · '),
        ),
      ]),
      picks.length
        ? React.createElement('div', { key: 'grid', className: 'rr-guide__grid' }, [
            React.createElement(
              'ol',
              { key: 'l', className: 'rr-guide__list', 'aria-label': task.title || task.label },
              picks.map(row),
            ),
            detail(current, picks.indexOf(current)),
          ])
        : React.createElement('div', { key: 'e', className: 'rr-guide__empty' }, [
            React.createElement(
              'p',
              { key: 't', className: 'rr-guide__emptyt' },
              props.emptyTitle || 'Not ranked yet',
            ),
            React.createElement(
              'p',
              { key: 'd' },
              task.emptyText ||
                props.emptyText ||
                'This task is being tested. Its top five publish with the next monthly edition.',
            ),
          ]),
      props.method
        ? React.createElement('details', { key: 'm', className: 'rr-guide__method', open: adv || undefined }, [
            React.createElement('summary', { key: 's' }, props.methodLabel || 'How Redrob tests and ranks'),
            React.createElement('div', { key: 'b' }, props.method),
          ])
        : null,
    ],
  );
}

export default ModelGuide;
