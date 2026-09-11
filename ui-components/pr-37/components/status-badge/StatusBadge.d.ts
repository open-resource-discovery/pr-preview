import { HTMLAttributes, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/types';
export type StatusTone = "neutral" | "info" | "success" | "warning" | "critical";
declare const statusBadgeVariants: (props?: ({
    tone?: "success" | "warning" | "neutral" | "info" | "critical" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;
export interface StatusBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children">, VariantProps<typeof statusBadgeVariants> {
    /** Visible, caller-provided label. The component ships no default text. */
    label: ReactNode;
    /** Show the leading tone dot. Ignored when `icon` is provided. */
    dot?: boolean;
    /** Custom leading icon slot; replaces the dot. */
    icon?: ReactNode;
}
/**
 * A soft, tonal status label with an optional leading dot or icon.
 *
 * Tones are neutral presentation values (`neutral | info | success | warning | critical`);
 * callers map their own domain states onto them. For the solid, filled look use
 * {@link Badge} with {@link toneToBadgeVariant}.
 */
declare const StatusBadge: ForwardRefExoticComponent<StatusBadgeProps & RefAttributes<HTMLSpanElement>>;
/**
 * Maps a {@link StatusTone} to the nearest solid {@link Badge} `variant`, for callers
 * that want the filled Badge look instead of the soft StatusBadge tone.
 */
export declare const toneToBadgeVariant: {
    readonly neutral: "secondary";
    readonly info: "highlight";
    readonly success: "success";
    readonly warning: "warning";
    readonly critical: "destructive";
};
export { StatusBadge, statusBadgeVariants };
//# sourceMappingURL=StatusBadge.d.ts.map