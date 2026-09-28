# redrob-ui

한국어: [README.ko.md](./README.ko.md)

The **Redrob Group Design System 2026**, as typed React components: 123 components and 252 icons,
written in TypeScript, styled with plain CSS on design tokens.

`@redrob-labs/ui`

## Install

```bash
yarn add @redrob-labs/ui
# or
npm install @redrob-labs/ui
```

Published to the public npm registry. No authentication, no `.npmrc` entry, nothing to configure —
the previous release went to GitHub Packages, which required every consumer to hold a token just to
install a public package.

`react` and `react-dom` are peer dependencies (`^18.2.0 || ^19.0.0`). Your project provides them.

## Use

Import the stylesheet once, at your application's entry point. There is no Tailwind config, no
PostCSS step and no build plugin: the system is plain CSS on custom properties.

```javascript
import '@redrob-labs/ui/dist/styles/tokens.css';
import '@redrob-labs/ui/dist/styles/system.css';
```

```jsx
import { Button, Hero, Display } from '@redrob-labs/ui';

function Landing() {
  return (
    <Hero
      lede="Every claim on this page says what it is measured over."
      action={<Button tone="primary">Read the method</Button>}
      secondary="See the data"
      secondaryHref="/data"
    >
      <Display>Hiring decisions you can check.</Display>
    </Hero>
  );
}
```

`src/index.ts` is the single entry point. Every export is listed there, grouped by system group,
with its prop types.

The 18 font faces ship in `dist/fonts/` and `system.css` references them relatively, so they
resolve wherever the package is served from.

## The parity harness

This library is a transcription of the design system's own reference bundle, so "does it look
right" is not the standard. The gate is exact markup equality:

```bash
yarn test        # every component vs the reference bundle
yarn test:self   # the reference vs itself, to prove the harness still compares anything
```

`node tools/parity/run.js [Names]` renders each component twice — once from the delivery's
reference bundle, once from our built `dist` — against the delivery's **own** `preview.html` case,
and compares the normalised markup. The cases are the delivery's, not ours, so they cannot drift
toward the implementation they are meant to check.

`reference/` holds a vendored 2 MB slice of the 141 MB delivery: `bundle.js`, its stylesheet, the
prop contract, and all 148 preview cases. It is committed so the gate runs in CI. Point
`REDROB_DS_DIR` at a full delivery to refresh it or to try a newer one.

Two things this harness has caught that review would not:

- A circle whose inline style emitted `width;height` where the reference emits `height;width`.
  Invisible on screen, and a real difference in the DOM.
- `tsc` has no `noEmitOnError`, so it writes output **even when it reports errors**. A component
  with a real type error still rendered, and parity passed on the broken output. **Parity green with
  a red build is not a pass** — read the build's exit code separately.

## Develop

Node.js 20.x. Yarn 1.x (`yarn.lock` is v1 and CI installs with `--frozen-lockfile`).

```bash
git clone https://github.com/mckinley-and-rice/redrob-ui.git
cd redrob-ui
yarn install
yarn build && yarn test
```

| Command | What it does |
|---|---|
| `yarn build` | `tsc` to `dist/`, then copies `src/styles/*.css` and `src/fonts/*.woff2`. |
| `yarn test` | Parity against the reference bundle. The gate. |
| `yarn test:self` | Renders the reference against itself. Proves the harness works. |
| `yarn icons` | Regenerates `src/icons/index.tsx` from the delivery's icon table. |
| `yarn icons:check` | Fails if the checked-in icon module is out of date. |

`src/icons/index.tsx` is **generated**. Edit the generator, not the file — a hand-edit is
overwritten by the next `yarn icons` without warning, which is why CI checks it.

Components are written with `React.createElement` rather than JSX. That is deliberate: the port
transcribes the reference's `h()` calls, and the gate compares markup exactly, so keeping the call
shape identical makes a difference in the output easy to find.

There is no Storybook. The delivery's 148 `preview.html` cases are the gallery, and the parity
harness already renders every component against all of them — hand-written stories would be a
third copy of the same cases, free to drift from both.

## Contributing

[CONTRIBUTING.md](./CONTRIBUTING.md) — branch names, the pull request path, and how a release
is cut. Branching follows the organization's
[gitflow standard](https://github.com/mckinley-and-rice/.github/blob/main/docs/GITFLOW.md):
`develop` is the default branch, `main` is the released state.

## Support

- Bugs and feature requests: [issues](https://github.com/mckinley-and-rice/redrob-ui/issues).
- Security vulnerabilities: never in an issue. See the organization's
  [security policy](https://github.com/mckinley-and-rice/.github/blob/main/SECURITY.md).

## License

MIT. See [LICENSE](./LICENSE).
