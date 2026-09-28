# Contributing

한국어: [CONTRIBUTING.ko.md](./CONTRIBUTING.ko.md)

The organization-wide rules live in
[mckinley-and-rice/.github](https://github.com/mckinley-and-rice/.github). This file says what
is true of **this** repository, which is the part a document cannot inherit.

## Setup

Node.js 20.x, Yarn 1.x.

```bash
yarn install
yarn storybook
```

## Branches

`develop` is the default branch and every change lands there first. `main` is the released
state and only ever moves through a promotion pull request.

Working branches are `<type>/<short-slug>`. This repository's types, which are the list the
`gitflow` workflow enforces:

```
feat fix chore docs test refactor perf hotfix release
```

There is no `sync` type: this is not a fork, so nothing arrives from upstream.

The type list differs per repository across the organization, and the check fails a guess. The
gate is `ALLOWED_TYPES` in `.github/workflows/gitflow.yml`; this table is the explanation. If
the two ever disagree, the workflow is right and this file is stale.

A branch name says what the change is, not who or what made it. An agent or tool name is not a
type.

If the check already failed, renaming the branch is not enough on its own. A failed run stays
keyed to the commit, so amend the commit too, or the new pull request shows the old red X while
reporting itself mergeable.

## Merging

| Situation | Style |
|---|---|
| Working branch into `develop` | squash |
| `develop` into `main` promotion | merge commit |
| Hotfix into `main` | merge commit |

Never rebase-merge. Squashing a promotion destroys the relationship between the two branches
and the `back-merged` check then has nothing real to compare.

## Verifying a change

There is **no test suite**. `yarn test` exits non-zero on purpose so that nothing reports a
pass that never ran. That means the burden is on you and on the reviewer:

```bash
yarn build            # tsc, then the style and asset copies
yarn build-storybook  # the whole story set has to compile
yarn storybook        # then look at the component you changed
```

A green build is not verification of anything a user sees. Open the story, interact with the
component, and say in the pull request what you looked at and what it did.

Because no test job exists, none can be a required check. `ci` is the required one: it builds
the package and Storybook and asserts both produced real output, because the build is `tsc`
plus two `cp` commands and an empty `dist/` would otherwise pass silently.

## Adding a component

1. `src/components/<Name>.tsx`.
2. Export it from `src/index.ts`. That file is the entire public surface; a component not
   exported there does not exist to a consumer.
3. `src/stories/<Name>.stories.tsx`. Storybook is the documentation, so a component with no
   story is undocumented.
4. Style with Tailwind classes. Anything the package's own `tailwind.config.js` does not know
   about will not reach a consumer, because their build purges by `content`.

Use `example.com` in placeholder data. Never a real person, and never an internal domain.

## Releasing

Versions are `v<major>.<minor>.<patch>`.

1. Bump `version` in `package.json` on `develop`.
2. Open a promotion pull request from `develop` into `main`, and merge it as a merge commit.
3. Tag `main` at that commit, then create the GitHub Release from the tag.

Publishing runs on `release: published`, not on a push. It refuses to publish when the tag is
not an ancestor of `main`, or when `package.json` disagrees with the tag, and it skips a
version that is already on the registry so a retry is safe. Publishing is immutable: a version
number is spent the moment it lands.

To rehearse without publishing, run the `publish` workflow manually with `dry_run` left on.

## Pull requests

The organization's pull request template applies. Two lines of it are the ones that get
skipped here:

- Any count, size or version in the description is re-measured from the built artifact in the
  same sitting, and says which surface produced it.
- No credential, token or `.env` file in the diff. `.npmrc` is gitignored for that reason;
  keep it that way.

## Reporting a vulnerability

Not in an issue. See the organization's
[security policy](https://github.com/mckinley-and-rice/.github/blob/main/SECURITY.md).
