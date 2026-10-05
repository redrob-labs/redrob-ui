# Changelog

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
