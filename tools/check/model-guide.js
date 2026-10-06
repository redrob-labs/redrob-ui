#!/usr/bin/env node
'use strict';

/**
 * Behaviour of the ModelGuide additions that the parity gate cannot see, because the reference
 * delivery's preview passes none of them: the working-language select, models run in sequence,
 * kind badges, the monthly range, tool tags and the sources list. Also asserts a guide given none of
 * these props renders none of their markup, so the reference markup stays untouched.
 *
 *   node tools/check/model-guide.js      (after yarn build)
 */

const React = require('react'); const { renderToStaticMarkup } = require('react-dom/server');
const { ModelGuide } = require(require('path').join(__dirname, '..', '..', 'dist', 'index.js'));
const pick = (id, extra) => Object.assign({ id, model: id.toUpperCase(), harness: 'Redrob Desk', monthly: 12.5, effort: { label: 'High', level: 3, of: 4 } }, extra);
const professions = [{ id: 'lawyer', label: 'Lawyer', tasks: [{ id: 'review', label: 'Review contracts',
  picks: [pick('base')],
  picksByLanguage: {
    en: [pick('en1', { kind: 'derived', monthlyKind: 'estimate', monthlyRange: [6, 25] })],
    ko: [pick('ko1', { steps: [{ model: 'Muse Spark 1.3', role: 'Legal analysis' }, { model: 'Gemini 3.8 Flash', role: 'Korean drafting' }],
      comingSoon: true, flags: ['Data policy unverified'], tools: [{ label: 'File read' }, { label: 'UI design', soon: true }, { label: 'Browser', missing: true }],
      sources: [{ label: 'Harvey LAB', value: '23.75%', kind: 'measured', url: 'https://www.vals.ai/benchmarks/hlab', date: '2026-10-02' }] })],
  } }] }];
const langs = [{ value: 'en', label: 'English' }, { value: 'ko', label: '한국어' }, { value: 'hi', label: 'हिन्दी' }];
const ok = (c, m) => { if (!c) { console.error('FAIL', m); process.exitCode = 1; } else console.log('ok  ', m); };
const en = renderToStaticMarkup(React.createElement(ModelGuide, { professions, languages: langs }));
ok(en.includes('EN1') && !en.includes('KO1'), 'default language = first, uses picksByLanguage.en');
ok(en.includes('rr-guide__ask--lang') && en.includes('한국어'), 'language select rendered');
ok(en.includes('Derived') && en.includes('Estimate') && en.includes('Likely between'), 'kind badges + monthly range');
const ko = renderToStaticMarkup(React.createElement(ModelGuide, { professions, languages: langs, language: 'ko' }));
ok(ko.includes('Muse Spark 1.3 \u2192 Gemini 3.8 Flash'), 'chain name A -> B');
ok(ko.includes('rr-guide__steps') && ko.includes('Korean drafting'), 'chain steps with roles');
ok((ko.match(/Coming soon/g) || []).length >= 2 && ko.includes('Data policy unverified'), 'coming soon + flags');
ok(ko.includes('is-missing') && ko.includes('is-soon'), 'tool tags');
ok(ko.includes('rr-guide__sources') && ko.includes('rel="noopener noreferrer"') && ko.includes('23.75%'), 'sources disclosure');
const hi = renderToStaticMarkup(React.createElement(ModelGuide, { professions, languages: langs, language: 'hi' }));
ok(hi.includes('BASE'), 'missing language falls back to picks');
const plain = renderToStaticMarkup(React.createElement(ModelGuide, { professions: [{ id: 'x', label: 'X', tasks: [{ id: 't', label: 'T', picks: [pick('p')] }] }] }));
ok(!/rr-guide__(badges|steps|tools|sources|costr|ask--lang)/.test(plain), 'no new markup without new props');

// A keyed language holding no ranking yet falls back as an absent key does; `[]` is truthy.
const blank = [{ id: 'lawyer', label: 'Lawyer', tasks: [{ id: 'review', label: 'Review contracts', emptyText: 'Nothing ranked yet', picks: [pick('base')], picksByLanguage: { en: [], ko: [pick('ko1')] } }] }];
const emptyLang = renderToStaticMarkup(React.createElement(ModelGuide, { professions: blank, languages: langs }));
ok(emptyLang.includes('BASE') && !emptyLang.includes('rr-guide__empty'), 'empty language array falls back to picks');

// `steps` makes `model` optional, so a one-step pick must still be named.
const one = renderToStaticMarkup(React.createElement(ModelGuide, { professions: [{ id: 'p', label: 'P', tasks: [{ id: 't', label: 'T',
  picks: [{ id: 's', harness: 'Redrob Desk', monthly: 9, effort: { label: 'High', level: 3, of: 4 }, steps: [{ model: 'Muse Spark 1.3', role: 'Only step' }] }] }] }] }));
ok(/rr-guide__dname[^>]*>Muse Spark 1\.3/.test(one), 'one-step pick is named from its step');

// A pick carrying only a range has no single figure, so the unit goes with it.
const rangeOnly = renderToStaticMarkup(React.createElement(ModelGuide, { professions: [{ id: 'p', label: 'P', tasks: [{ id: 't', label: 'T',
  picks: [{ id: 'r', model: 'R', harness: 'H', effort: { label: 'High', level: 3, of: 4 }, monthlyRange: [6, 25], monthlyKind: 'estimate' }] }] }] }));
ok(!rangeOnly.includes('rr-guide__costv') && rangeOnly.includes('Likely between'), 'no bare unit without a monthly figure');

// Every string beside a tool tag takes a prop.
const ko2 = renderToStaticMarkup(React.createElement(ModelGuide, { professions, languages: langs, language: 'ko', comingSoonLabel: '곧 지원', missingLabel: '지원 안 함' }));
ok(ko2.includes('지원 안 함') && !ko2.includes('not available'), 'missingLabel replaces the hardcoded English');
