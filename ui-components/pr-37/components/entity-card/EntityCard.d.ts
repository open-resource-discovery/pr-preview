import { HTMLAttributes, MouseEventHandler, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { LinkRender } from '../../utils/link';
import { StatusTone } from '../status-badge';
import { ClassProp } from 'class-variance-authority/types';
export interface EntityStatus {
    label: ReactNode;
    tone?: StatusTone;
    /** Leading icon for the badge; replaces the tone dot. Forwarded to {@link StatusBadge}. */
    icon?: ReactNode;
    /** Show the leading tone dot (default true; ignored when `icon` is set). */
    dot?: boolean;
    /** Per-badge class override, e.g. an app's custom color pill. */
    className?: string;
}
export interface EntityMetric {
    label: ReactNode;
    /** Pre-formatted by the caller. */
    value: ReactNode;
}
export type EntityCardSize = "sm" | "md";
export interface EntityCardModel {
    /** Short kind/type label (e.g. "API Resource"). Optional; renders a subdued eyebrow when set. */
    kind?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    version?: ReactNode;
    statuses?: EntityStatus[];
    metrics?: EntityMetric[];
}
declare const cardVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
} & ClassProp) | undefined) => string;
export interface EntityCardProps extends EntityCardModel, Omit<HTMLAttributes<HTMLElement>, "title" | "onClick" | "color">, VariantProps<typeof cardVariants> {
    /** Optional leading icon. */
    icon?: ReactNode;
    /** Tint classes for the icon square (e.g. "bg-sky-100 text-sky-600"); overrides the neutral default. */
    iconClassName?: string;
    /** How metrics render: inline count chips (default) or a two-column definition list. */
    metricsVariant?: "chips" | "grid";
    /** Header trailing affordance, pinned to the right (e.g. a chevron). */
    action?: ReactNode;
    /** Free-form tag row rendered after `statuses` (for app-specific pills the tones can't express). */
    pills?: ReactNode;
    /** Footer content on the left (e.g. version · owner, or an id + copy button). */
    footer?: ReactNode;
    /** Footer content pinned to the right (e.g. an "Explore ›" affordance). */
    footerAction?: ReactNode;
    /** Draw the top divider above the footer (default true). */
    footerDivider?: boolean;
    /** Dim the card and disable pointer interaction. */
    disabled?: boolean;
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
 * A semantic card for a typed entity (title, subtitle, statuses, metrics, footer). Its default
 * look matches the Equilibrium prototype card; slots (`icon`/`iconClassName`, `action`, `pills`,
 * `footer`/`footerAction`) plus the `--ord-entitycard-*` token layer let callers retheme it or bend
 * it to another app's card (e.g. Explorer). Renders as a native `<a>` when `href` is set, a
 * `<button>` when only `onClick` is set, or an `<article>` otherwise; a caller `render` slot (a
 * router `<Link>`) takes precedence, keeping the library router-agnostic. Statuses reuse
 * {@link StatusBadge}.
 */
declare const EntityCard: ForwardRefExoticComponent<EntityCardProps & RefAttributes<HTMLElement>>;
export { EntityCard };
//# sourceMappingURL=EntityCard.d.ts.map