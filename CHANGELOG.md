# Changelog

## Unreleased

### Added
- `ModelGuide`: `harnessLabel`, `rankLabel` and `effortUnit`, so the "on <harness>", "#1 for <task>" and "<level> effort" text can be translated. Without them the English defaults render as before.

### Fixed
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
