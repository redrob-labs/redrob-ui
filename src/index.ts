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

/* ---- Frames -------------------------------------------------------------- */
export { Band } from './components/Band/Band';
export type { BandProps, BandProduct } from './components/Band/Band';
