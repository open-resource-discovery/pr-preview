import { ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { ButtonProps } from '../button';
import { LinkRender } from '../../utils/link';
export interface LinkButtonProps extends Pick<ButtonProps, "variant" | "size"> {
    /** Navigation target for the native `<a>` fallback. Ignored when `render` is provided. */
    href?: string;
    /** Caller-supplied link renderer (Next.js / TanStack Router — no router dependency here). */
    render?: LinkRender;
    /** Accessible name for the link (icon-only, no visible text). */
    label?: string;
    /** Override the icon (defaults to a chain/link glyph). */
    icon?: ReactNode;
    className?: string;
}
/**
 * An icon-only link styled like an icon button (shared `buttonVariants` surface). It navigates —
 * it does not copy. Provide a `render` to wire a router's `<Link>`, or an `href` for a native `<a>`
 * fallback. Defaults to the `ghost`/`icon` look and a chain glyph.
 */
declare const LinkButton: ForwardRefExoticComponent<LinkButtonProps & RefAttributes<HTMLAnchorElement>>;
export { LinkButton };
//# sourceMappingURL=LinkButton.d.ts.map