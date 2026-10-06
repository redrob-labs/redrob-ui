# Changelog

## Unreleased

### Added
- `AppShell`: `onNavigate(href, event)`, called on a plain click of a nav link so an app with a client-side router (Next.js, React Router) can call `event.preventDefault()` and route itself instead of reloading the page. Clicks with a modifier key or another button stay with the browser, so opening a link in a new tab still works. Without it the links render exactly as before, with no handler.
- Console, the eighth product. `AppShell product="Console"` (or "Redrob Console") now sets `data-product="console"` instead of being dropped, and `Band product="console"` wears its grounds. Console is the Group's own product, so it takes Redrob Blue rather than an eighth hue: `--product-console-1..10` reference `--blue-1..10`, with the same wash/fill/line roles (steps 1/2/3 light, 10/9/8 dark) and `beyond` gradients as every other product. `tokens.json` and the native headers carry the 17 new tokens. The suite spectrum seam is unchanged: it already opens on the brand's own teal and blue.
- `AppShell`: `windowInset` (`top`, `end`, `endHeight`) keeps a frameless desktop window's own controls off the page - the macOS traffic lights above the sidebar brand, the Windows caption buttons at the top-right of the header (or the rail) - and `dragRegion` makes the brand row and header drag the window while their controls stay clickable. Both are off by default; a shell without them renders no new class or inline style.
- `AppShell`: `asideFolded`, what stays at the bottom of the sidebar when it is folded (or narrower than 900px) in place of `aside`, e.g. the account as an avatar-only menu button. Without it the folded shell renders as before.
- `ModelGuide`: `harnessLabel`, `rankLabel` and `effortUnit`, so the "on <harness>", "#1 for <task>" and "<level> effort" text can be translated. Without them the English defaults render as before.

### Fixed
- `ModelGuide`: reflows on its own width instead of the window's (container queries, with the 900px media query kept as a fallback). In a product frame with a menu and a side panel open, the two-column grid used to stay side by side in a ~480px column, the selects ran past its edge and the effort label overlapped the ranking note. Below 880px the grid and selects stack; below 480px the pick's header puts the cost under the model name.
- `AppShell`: folded nav links show the design-system `Tooltip` (label and count) instead of a native `title`, placed against the window so the narrow sidebar cannot cut it off. The folded sidebar no longer scrolls sideways. `yarn shell:check` covers the folded state.
- Overlays are no longer cut off by the container they sit in. `Menu`, `ComposerStatus`, `ModelPicker`, `Select`, `Combobox`, `DatePicker`, `TimePicker`, `LangSwitch` and `Tooltip` now place their open overlay against the window (`position: fixed`), flip to the side with more room, slide back inside the edges and cap their height to the space they have. A `ComposerStatus` panel above a composer in the middle of an empty chat used to run off the top of its column. Closed components render the same markup as before; the placement is inline style added only while open. `yarn floating:check` covers the placement.
- `ModelGuide`: a pick with no sample run (no `task.prompt`, `sample.prompt` or `sample.output`) no longer shows empty "What it was asked" and "What it wrote" boxes.

## 1.2.0

### Added
- `ModelGuide`: a working-language select (`languages`, `language`, `defaultLanguage`, `onLanguageChange`) that switches each task to `picksByLanguage[language]`, falling back to `picks`.
- `ModelGuide`: picks that run models in sequence (`steps`, named "A → B", with each step's role and effort).
- `ModelGuide`: where each figure comes from (`kind`, `monthlyKind`: measured / published / derived / estimate), a monthly range (`monthlyRange`), tool tags with planned and missing tools (`tools`, `comingSoon`, `missingLabel`), caveats (`flags`) and a sources list (`sources`).
- Types `GuideKind`, `GuideStep`, `GuideSource`, `GuideTool`.

These go beyond the 4 October 2026 delivery, whose ModelGuide has none of them. Every one is optional and renders no markup when absent, so parity with the reference is unchanged; `yarn guide:check` (in CI) asserts their behaviour and that absence.

## 1.1.0

Brings the library to the Redrob Group Design System 2026 delivery of 4 October 2026. Nothing is removed.

### Added
- `ComposerMode`, `ProtectionStatus`, `CrossCheckSetting` (with `CrossCheckSetting.value`), `Opinion`, `ThreadNote`, `PlanQuestions`, `PlanDocument`, `FactCheckReport`, `ChallengeReport`, `AccessList`, `Meter`, `ScheduleRow`, and their prop types.
- `COMPOSER_MODES`, `CROSS_CHECKS`, `CROSS_CHECK_LEVELS`, `EffortLevel`, `EffortNoteContext`.

### Changed
- `Menu`: an icon-only trigger (`icon` without `label`, named by `ariaLabel`).
- `ModelPicker` and `ModelGuide`: effort levels a person can set on a pick (`effort`, `defaultEffort`).
- `LangSwitch`: closes on outside click and Escape; `placement="up"`, `align="left"`.
- `PostList`: `variant="section"` is the homepage news band.
- `PrivacyProtection` and `MemoryScope` head their panels with `ProtectionStatus`.
- `system.css` is the new delivery's stylesheet. `tokens.css` is unchanged.

### Deprecated (still exported in 1.x)
| Old | Use |
|---|---|
| `StatusCard` | `ProtectionStatus` (forwards to it) |
| `ScopeBadge` | `AccessList` (forwards to it) |
| `Schedule` | `ScheduleRow` |
| `SecondOpinionSetting` | `CrossCheckSetting` (now an adapter onto it: one value sets both checks, because its `rr-opset` styles are gone) |
| `CostMeter`, `MemoryMeter` | `Meter` |
| `Disputed`, `OpinionAdded` | `Opinion` |
| `ModelSwitch`, `MemorySaved` | `ThreadNote` |
| `NewsSection` | `PostList variant="section"` |
| `AvatarMark` | `Avatar` |

`yarn aliases:check` (in CI) asserts each one still exports and renders.

### Tooling
- `reference/` is the 4 October 2026 delivery. `.gitattributes` keeps it LF on Windows checkouts.
- Parity reports the 30 product screens that load a whole prototype app as not compared.
