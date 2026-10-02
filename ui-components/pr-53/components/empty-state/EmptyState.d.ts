import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
export interface EmptyStateProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
    /** Optional leading icon, rendered inside a bordered bubble. */
    icon?: ReactNode;
    /** Primary message. Caller-provided (no default text). */
    title?: ReactNode;
    /** Secondary explanatory text. */
    description?: ReactNode;
    /** Action slot (e.g. one or more `Button`s). */
    actions?: ReactNode;
}
/**
 * A neutral shell for empty, no-results, and error-adjacent states. Every slot is
 * caller-supplied and renders only when provided; the component ships no default text.
 */
declare const EmptyState: ForwardRefExoticComponent<EmptyStateProps & RefAttributes<HTMLDivElement>>;
export { EmptyState };
//# sourceMappingURL=EmptyState.d.ts.map