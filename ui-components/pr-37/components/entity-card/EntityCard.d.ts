import { MouseEventHandler, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { LinkRender } from '../../utils/link';
import { StatusTone } from '../status-badge';
export interface EntityStatus {
    label: ReactNode;
    tone?: StatusTone;
}
export interface EntityMetric {
    label: ReactNode;
    /** Pre-formatted by the caller. */
    value: ReactNode;
}
export interface EntityCardModel {
    /** Short kind/type label (e.g. "API Resource"). */
    kind: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    version?: ReactNode;
    statuses?: EntityStatus[];
    metrics?: EntityMetric[];
}
export interface EntityCardProps extends EntityCardModel {
    className?: string;
    /** Optional leading icon. */
    icon?: ReactNode;
    /** Navigation target for the native `<a>` fallback. */
    href?: string;
    /** Link renderer (Next.js / TanStack Router) — takes precedence over `href`. No router dependency. */
    render?: LinkRender;
    /** Click handler; renders a `<button>` when there is no `href`/`render`. */
    onClick?: MouseEventHandler<HTMLElement>;
    /** Accessible name when the whole card is interactive (no default text). */
    ariaLabel?: string;
}
/**
 * A semantic card for a typed entity (kind, title, statuses, metrics). Renders as a
 * native `<a>` when `href` is set, a `<button>` when only `onClick` is set, or an
 * `<article>` otherwise. A caller `render` slot (a router `<Link>`) takes precedence,
 * keeping the library router-agnostic. Statuses reuse {@link StatusBadge}.
 */
declare const EntityCard: ForwardRefExoticComponent<EntityCardProps & RefAttributes<HTMLElement>>;
export { EntityCard };
//# sourceMappingURL=EntityCard.d.ts.map