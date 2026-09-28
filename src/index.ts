/**
 * Redrob design system - React components.
 *
 * Built on the Redrob Group Design System 2026. Every component here is held to the system's own
 * reference bundle by `tools/parity/run.js`, which renders both against the delivery's preview cases
 * and compares the markup, so "looks right" is never the standard.
 *
 * Components are exported in the system's own order: the base, then the controls a person touches,
 * then what shows data, then the frames, then the product's surfaces, then the public site.
 */

export { icons, iconNames, svg } from './icons';
export type { IconName, IconProps, IconComponent } from './icons';

/* ---- Foundations --------------------------------------------------------- */
export { Mark } from './components/Mark/Mark';
export type { MarkProps } from './components/Mark/Mark';
export { MarkReveal } from './components/MarkReveal/MarkReveal';
export type { MarkRevealProps } from './components/MarkReveal/MarkReveal';
export { Layer, LayerContext, LAYER_MEANS } from './components/Layer/Layer';
export type { LayerProps } from './components/Layer/Layer';
export { Illustration } from './components/Illustration/Illustration';
export type { IllustrationProps } from './components/Illustration/Illustration';
export { Diagram } from './components/Diagram/Diagram';
export type { DiagramProps, DiagramStep, DiagramActor } from './components/Diagram/Diagram';
export { illustrations, illustrationNames, CONSTRUCTIONS, RAKE } from './internal/illustrations';

/* ---- Voice --------------------------------------------------------------- */
export { Display } from './components/Display/Display';
export type { DisplayProps } from './components/Display/Display';
export { Statement } from './components/Statement/Statement';
export type { StatementProps } from './components/Statement/Statement';
export { Quote } from './components/Quote/Quote';
export type { QuoteProps } from './components/Quote/Quote';
export { SectionMark } from './components/SectionMark/SectionMark';
export type { SectionMarkProps } from './components/SectionMark/SectionMark';

/* ---- Actions ------------------------------------------------------------- */
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';
export { IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps } from './components/IconButton/IconButton';
export { Menu } from './components/Menu/Menu';
export type { MenuProps, MenuItem } from './components/Menu/Menu';

/* ---- Forms --------------------------------------------------------------- */
export { Form } from './components/Form/Form';
export type { FormProps, FormError } from './components/Form/Form';
export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';
export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';
export { Select } from './components/Select/Select';
export type { SelectProps, SelectOption } from './components/Select/Select';
export { Combobox } from './components/Combobox/Combobox';
export type { ComboboxProps, ComboboxOption } from './components/Combobox/Combobox';
export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export { Radio } from './components/Radio/Radio';
export type { RadioProps } from './components/Radio/Radio';
export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';
export { DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps } from './components/DatePicker/DatePicker';
export { TimePicker } from './components/TimePicker/TimePicker';
export type { TimePickerProps } from './components/TimePicker/TimePicker';
export { TimeZonePicker } from './components/TimeZonePicker/TimeZonePicker';
export type { TimeZonePickerProps } from './components/TimeZonePicker/TimeZonePicker';
export { FileUpload } from './components/FileUpload/FileUpload';
export type { FileUploadProps, UploadedFile } from './components/FileUpload/FileUpload';

/* ---- Borders ------------------------------------------------------------- */
export { NameInput } from './components/NameInput/NameInput';
export type { NameInputProps, NameValue } from './components/NameInput/NameInput';
export { AddressInput } from './components/AddressInput/AddressInput';
export type { AddressInputProps, AddressValue } from './components/AddressInput/AddressInput';
export { PhoneInput } from './components/PhoneInput/PhoneInput';
export type { PhoneInputProps, PhoneValue } from './components/PhoneInput/PhoneInput';
export { DateInput } from './components/DateInput/DateInput';
export type { DateInputProps, DateInputValue } from './components/DateInput/DateInput';
export { Money } from './components/Money/Money';
export type { MoneyProps } from './components/Money/Money';
export { ConvertedAmount } from './components/ConvertedAmount/ConvertedAmount';
export type { ConvertedAmountProps } from './components/ConvertedAmount/ConvertedAmount';
export { Timestamp } from './components/Timestamp/Timestamp';
export type { TimestampProps } from './components/Timestamp/Timestamp';
/** Exported because a consumer validating its own date form needs the same answer DateInput uses. */
export { dateParts, toE164, tidyPostal } from './internal/borders';

/* ---- Navigation ---------------------------------------------------------- */
export { Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabItem } from './components/Tabs/Tabs';
export { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';
export { Pagination, pageList } from './components/Pagination/Pagination';
export type { PaginationProps } from './components/Pagination/Pagination';
export { Stepper } from './components/Stepper/Stepper';
export type { StepperProps, StepperStep } from './components/Stepper/Stepper';
export { Accordion } from './components/Accordion/Accordion';
export type { AccordionProps, AccordionItem } from './components/Accordion/Accordion';
export { Scroller } from './components/Scroller/Scroller';
export type { ScrollerProps } from './components/Scroller/Scroller';

/* ---- Feedback ------------------------------------------------------------ */
export { Alert } from './components/Alert/Alert';
export type { AlertProps } from './components/Alert/Alert';
export { Toast } from './components/Toast/Toast';
export type { ToastProps } from './components/Toast/Toast';
export { Modal } from './components/Modal/Modal';
export type { ModalProps } from './components/Modal/Modal';
export { Drawer } from './components/Drawer/Drawer';
export type { DrawerProps } from './components/Drawer/Drawer';
export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';
export { Progress } from './components/Progress/Progress';
export type { ProgressProps } from './components/Progress/Progress';
export { Loader } from './components/Loader/Loader';
export type { LoaderProps } from './components/Loader/Loader';
export { Skeleton } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';
export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';

/* ---- Data display -------------------------------------------------------- */
export { Card } from './components/Card/Card';
export type { CardProps } from './components/Card/Card';
export { Table } from './components/Table/Table';
export type { TableProps, TableColumn } from './components/Table/Table';
export { Stat } from './components/Stat/Stat';
export type { StatProps } from './components/Stat/Stat';
export { Chart } from './components/Chart/Chart';
export type { ChartProps, ChartSeries } from './components/Chart/Chart';
export { Sparkline } from './components/Sparkline/Sparkline';
export type { SparklineProps } from './components/Sparkline/Sparkline';
export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';
export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps } from './components/Avatar/Avatar';
export { AvatarMark } from './components/AvatarMark/AvatarMark';
export type { AvatarMarkProps } from './components/AvatarMark/AvatarMark';
export { seriesColor, niceMax, SERIES_LIGHT, SERIES_DARK } from './internal/chart';

/* ---- Agent chat ---------------------------------------------------------- */
export { Message } from './components/Message/Message';
export type { MessageProps } from './components/Message/Message';
export { Composer } from './components/Composer/Composer';
export type { ComposerProps } from './components/Composer/Composer';
export { ModelPicker } from './components/ModelPicker/ModelPicker';
export type {
  ModelPickerProps,
  ModelPick,
  ModelTask,
  ModelProfession,
} from './components/ModelPicker/ModelPicker';
export { ModelGuide } from './components/ModelGuide/ModelGuide';
export type {
  ModelGuideProps,
  GuidePick,
  GuideTask,
  GuideProfession,
} from './components/ModelGuide/ModelGuide';
export { ComposerStatus } from './components/ComposerStatus/ComposerStatus';
export type { ComposerStatusProps, ComposerStatusItem } from './components/ComposerStatus/ComposerStatus';
export { AnswerReceipt } from './components/AnswerReceipt/AnswerReceipt';
export type { AnswerReceiptProps, AnswerReceiptItem } from './components/AnswerReceipt/AnswerReceipt';
export { PrivateText } from './components/PrivateText/PrivateText';
export type { PrivateTextProps } from './components/PrivateText/PrivateText';
export { Disputed } from './components/Disputed/Disputed';
export type { DisputedProps, DisputedView } from './components/Disputed/Disputed';
export { OpinionAdded } from './components/OpinionAdded/OpinionAdded';
export type { OpinionAddedProps } from './components/OpinionAdded/OpinionAdded';
export { ModelSwitch } from './components/ModelSwitch/ModelSwitch';
export type { ModelSwitchProps } from './components/ModelSwitch/ModelSwitch';
export { MemorySaved } from './components/MemorySaved/MemorySaved';
export type { MemorySavedProps } from './components/MemorySaved/MemorySaved';
export { Streaming } from './components/Streaming/Streaming';
export type { StreamingProps } from './components/Streaming/Streaming';
export { PromptSuggestions } from './components/PromptSuggestions/PromptSuggestions';
export type { PromptSuggestionsProps, PromptSuggestion } from './components/PromptSuggestions/PromptSuggestions';
export { Citation } from './components/Citation/Citation';
export type { CitationProps } from './components/Citation/Citation';
export { Confidence } from './components/Confidence/Confidence';
export type { ConfidenceProps } from './components/Confidence/Confidence';
export { AgentAction } from './components/AgentAction/AgentAction';
export type { AgentActionProps } from './components/AgentAction/AgentAction';
export { AgentTimeline } from './components/AgentTimeline/AgentTimeline';
export type { AgentTimelineProps, AgentTimelineStep } from './components/AgentTimeline/AgentTimeline';
export { ApprovalStep } from './components/ApprovalStep/ApprovalStep';
export type { ApprovalStepProps } from './components/ApprovalStep/ApprovalStep';

/* ---- Safeguards ---------------------------------------------------------- */
export { StatusCard } from './components/StatusCard/StatusCard';
export type { StatusCardProps } from './components/StatusCard/StatusCard';
export { PrivacyProtection } from './components/PrivacyProtection/PrivacyProtection';
export type { PrivacyProtectionProps } from './components/PrivacyProtection/PrivacyProtection';
export { MemoryScope } from './components/MemoryScope/MemoryScope';
export type { MemoryScopeProps, MemoryScopeOption } from './components/MemoryScope/MemoryScope';
export { SecondOpinionSetting } from './components/SecondOpinionSetting/SecondOpinionSetting';
export type {
  SecondOpinionSettingProps,
  OpinionMode,
} from './components/SecondOpinionSetting/SecondOpinionSetting';
export { MemoryList } from './components/MemoryList/MemoryList';
export type { MemoryListProps, MemoryItem } from './components/MemoryList/MemoryList';
export { OpinionGrid } from './components/OpinionGrid/OpinionGrid';
export type { OpinionGridProps, OpinionColumn, OpinionRow } from './components/OpinionGrid/OpinionGrid';
export { PRIVACY_LEVELS, OPINION_MODES, OPINION_VERDICTS } from './internal/safeguards';

/* ---- Agent harness ------------------------------------------------------- */
export { TaskStatus } from './components/TaskStatus/TaskStatus';
export type { TaskStatusProps } from './components/TaskStatus/TaskStatus';
export { AgentRoster } from './components/AgentRoster/AgentRoster';
export type { AgentRosterProps, RosterAgent } from './components/AgentRoster/AgentRoster';
export { AgentHandoff } from './components/AgentHandoff/AgentHandoff';
export type { AgentHandoffProps } from './components/AgentHandoff/AgentHandoff';
export { ScopeBadge } from './components/ScopeBadge/ScopeBadge';
export type { ScopeBadgeProps, Scope } from './components/ScopeBadge/ScopeBadge';
export { Changes } from './components/Changes/Changes';
export type { ChangesProps, ChangeItem } from './components/Changes/Changes';
export { CostMeter } from './components/CostMeter/CostMeter';
export type { CostMeterProps, CostBreakdown } from './components/CostMeter/CostMeter';
export { MemoryMeter } from './components/MemoryMeter/MemoryMeter';
export type { MemoryMeterProps, MemorySegment } from './components/MemoryMeter/MemoryMeter';
export { Schedule } from './components/Schedule/Schedule';
export type { ScheduleProps, ScheduleLastRun } from './components/Schedule/Schedule';
export { SchedulePicker } from './components/SchedulePicker/SchedulePicker';
export type { SchedulePickerProps } from './components/SchedulePicker/SchedulePicker';
export { PlaybookRow } from './components/PlaybookRow/PlaybookRow';
export type { PlaybookRowProps, PlaybookStep } from './components/PlaybookRow/PlaybookRow';
export { AppAccess } from './components/AppAccess/AppAccess';
export type { AppAccessProps, AccessApp, AccessGrant } from './components/AppAccess/AppAccess';
export { ConnectorCard } from './components/ConnectorCard/ConnectorCard';
export type { ConnectorCardProps } from './components/ConnectorCard/ConnectorCard';
export { CheckIn } from './components/CheckIn/CheckIn';
export type { CheckInProps, CheckInOption } from './components/CheckIn/CheckIn';
export { RUN_LABEL, SCOPE_MODE, describeSchedule, nextScheduledRun } from './internal/harness';
export type { ScheduleValue } from './internal/harness';

/* ---- Frames -------------------------------------------------------------- */
export { AppShell } from './components/AppShell/AppShell';
export type { AppShellProps, AppShellNavItem } from './components/AppShell/AppShell';
export { PageShell } from './components/PageShell/PageShell';
export type { PageShellProps } from './components/PageShell/PageShell';
export { SiteHeader } from './components/SiteHeader/SiteHeader';
export type { SiteHeaderProps, SiteHeaderSection, SiteHeaderItem } from './components/SiteHeader/SiteHeader';
export { SiteFooter } from './components/SiteFooter/SiteFooter';
export type { SiteFooterProps, SiteFooterColumn, SiteFooterLink } from './components/SiteFooter/SiteFooter';
export { Band } from './components/Band/Band';
export type { BandProps, BandProduct } from './components/Band/Band';
export { LangSwitch } from './components/LangSwitch/LangSwitch';
export type { LangSwitchProps, LangOption } from './components/LangSwitch/LangSwitch';
export { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
export type { ThemeSwitchProps } from './components/ThemeSwitch/ThemeSwitch';
export { ConsentBar } from './components/ConsentBar/ConsentBar';
export type { ConsentBarProps, ConsentCategory } from './components/ConsentBar/ConsentBar';
export { applyTheme, themeTarget } from './internal/theme';
export type { ThemeMode } from './internal/theme';
