import { ButtonHTMLAttributes, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { ButtonProps } from '../button';
export type CopyState = "idle" | "copied" | "error";
export interface CopyButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "children" | "onCopy">, Pick<ButtonProps, "variant" | "size"> {
    /** Text written to the clipboard. */
    value: string;
    /** Milliseconds before the button returns to its idle state. Default 2000. */
    timeout?: number;
    /** Idle content (icon and/or label). Defaults to a copy icon. */
    children?: ReactNode;
    /** Content shown in the `copied` state. Defaults to a check icon. */
    copiedContent?: ReactNode;
    /** Content shown in the `error` state. Defaults to a cross icon. */
    errorContent?: ReactNode;
    /** Accessible name for the button (no default text; icon-only otherwise). */
    label?: string;
    /** Announced via `aria-live` on a successful copy. */
    copiedAnnouncement?: string;
    /** Announced via `aria-live` when the copy fails. */
    errorAnnouncement?: string;
    /** Called after each attempt with whether it succeeded. */
    onCopy?: (ok: boolean) => void;
}
/**
 * A clipboard-copy button with transient success/error feedback and an `aria-live`
 * status region. Requires `navigator.clipboard`; when it is unavailable or denied,
 * the button enters the `error` state.
 */
declare const CopyButton: ForwardRefExoticComponent<CopyButtonProps & RefAttributes<HTMLButtonElement>>;
export { CopyButton };
//# sourceMappingURL=CopyButton.d.ts.map