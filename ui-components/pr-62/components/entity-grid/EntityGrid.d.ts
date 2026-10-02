import { ComponentPropsWithoutRef, ReactElement, ReactNode } from '../../../node_modules/react';
export interface EntityGridProps<T> extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
    items: T[];
    /** Renders each item. Alternative to passing pre-rendered `children`. */
    renderItem?: (item: T, index: number) => ReactNode;
    /** Pre-rendered items, used when `renderItem` is not supplied. */
    children?: ReactNode;
    /** Header slot receiving the item count. Caller formats the number/label (no default text). */
    renderCount?: (count: number) => ReactNode;
    /** Rendered when `items` is empty. Pass an `<EmptyState />` (or any node). */
    empty?: ReactNode;
    /** Minimum column width for the responsive auto-fill grid. Default "16rem". */
    minColumnWidth?: string;
}
/**
 * A responsive collection of entity cards with an optional count header and empty state.
 * Generic over the item type. When `items` is empty it renders the caller-provided `empty`
 * node (typically an `EmptyState`); otherwise it lays items out in an auto-filling grid
 * with `role="list"` semantics.
 */
export declare function EntityGrid<T>({ items, renderItem, children, renderCount, empty, minColumnWidth, className, style, ...props }: EntityGridProps<T>): ReactElement;
export declare namespace EntityGrid {
    var displayName: string;
}
//# sourceMappingURL=EntityGrid.d.ts.map