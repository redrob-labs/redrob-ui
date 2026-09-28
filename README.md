# redrob-ui

한국어: [README.ko.md](./README.ko.md)

A React component library: 67 components, written in TypeScript, styled with Tailwind CSS,
documented in Storybook.

`@redrob-labs/ui`

## Install

The package is published to the **public npm registry**. No authentication and no `.npmrc` entry
is needed to install it.

```bash
yarn add @redrob-labs/ui
# or
npm install @redrob-labs/ui
```

`react` and `react-dom` (`^18.2.0`) are peer dependencies. Your project provides them.

## Use

Extend your Tailwind config with the one the package ships, and add the package to `content`
so its classes are not purged:

```javascript
// tailwind.config.js
const packageTailwindConfig = require('@redrob-labs/ui/tailwind.config.js');

module.exports = {
  presets: [packageTailwindConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@redrob-labs/ui/**/*.{js,ts,jsx,tsx}',
  ],
};
```

```jsx
import { Button, Dialog } from '@redrob-labs/ui';

function App() {
  return (
    <div>
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

`src/index.ts` is the single entry point. Every export is listed there.

## Develop

Node.js 20.x. Yarn 1.x (`yarn.lock` is v1 and CI installs with `--frozen-lockfile`).

```bash
git clone https://github.com/mckinley-and-rice/redrob-ui.git
cd redrob-ui
yarn install
yarn storybook        # http://localhost:6006
```

| Command | What it does |
|---|---|
| `yarn storybook` | Storybook dev server on port 6006. |
| `yarn build` | `tsc` to `dist/`, then copies `src/style` and `src/assets`. |
| `yarn build-storybook` | Static Storybook into `storybook-static/`. |

**There is no test suite.** `yarn test` exits non-zero on purpose, so nothing reports a pass
that never ran. Changes are verified by building and looking at the component in Storybook.
Because there is no test suite, no test job can be a required check; `ci` builds the package
and Storybook instead, and asserts both produced real output.

## Contributing

[CONTRIBUTING.md](./CONTRIBUTING.md) — branch names, the pull request path, and how a release
is cut. Branching follows the organization's
[gitflow standard](https://github.com/mckinley-and-rice/.github/blob/main/docs/GITFLOW.md):
`develop` is the default branch, `main` is the released state.

## Documentation

Storybook is the documentation and it is not hosted. Run `yarn storybook` and read it locally.

## Support

- Bugs and feature requests: [issues](https://github.com/mckinley-and-rice/redrob-ui/issues).
- Security vulnerabilities: never in an issue. See the organization's
  [security policy](https://github.com/mckinley-and-rice/.github/blob/main/SECURITY.md).

## License

MIT. See [LICENSE](./LICENSE).
