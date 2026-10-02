import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { LinkRender } from '../../utils/link';
export interface BreadcrumbItem {
    label: ReactNode;
    /** Navigation target for the native `<a>` fallback. Ignored when a renderer is provided. */
    href?: string;
    /** Per-item link renderer; overrides the component-level `linkRender`. */
    render?: LinkRender;
}
export interface BreadcrumbsProps extends Omit<ComponentPropsWithoutRef<"nav">, "children"> {
    items: BreadcrumbItem[];
    /** Accessible name for the `<nav>` landmark. Required and caller-provided (no default text). */
    label: string;
    /** Separator rendered between items. Defaults to a chevron. */
    separator?: ReactNode;
    /** Default link renderer for items without their own `render`. */
    linkRender?: LinkRender;
    /** Collapse to the first item + the last `maxItems - 1` when the trail is longer. 0/undefined disables. */
    maxItems?: number;
    /** Accessible label for the collapsed-items ellipsis. */
    collapseLabel?: string;
}
/**
 * A semantic, responsive breadcrumb trail (`<nav>` → `<ol>`). The last item is rendered as the
 * current page (`aria-current="page"`, non-navigational). Link items render through a caller-supplied
 * {@link LinkRender} (Next.js / TanStack Router — no router dependency here) or a native `<a href>`.
 */
declare const Breadcrumbs: ForwardRefExoticComponent<BreadcrumbsProps & RefAttributes<HTMLElement>>;
export { Breadcrumbs };
//# sourceMappingURL=Breadcrumbs.d.ts.map