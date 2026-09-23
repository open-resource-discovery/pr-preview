import { ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { ButtonProps } from '../button';
import { LinkRender } from '../../utils/link';
export interface ExternalLinkButtonProps extends Pick<ButtonProps, "variant" | "size"> {
    /** Navigation target for the native `<a>` fallback. Ignored when `render` is provided. */
    href?: string;
    /** Caller-supplied link renderer. Receives `target`/`rel` so it opens in a new tab too. */
    render?: LinkRender;
    /** Accessible name for the link (icon-only, no visible text). */
    label?: string;
    /** Override the icon (defaults to a square-with-arrow glyph). */
    icon?: ReactNode;
    className?: string;
}
/**
 * An icon-only link that opens its target in a new tab, styled like an icon button (shared
 * `buttonVariants` surface). Provide a `render` to wire a router's `<Link>` (it receives
 * `target`/`rel`), or an `href` for a native `<a target="_blank">` fallback. Defaults to the
 * `ghost`/`icon` look and a square-with-arrow glyph.
 */
declare const ExternalLinkButton: ForwardRefExoticComponent<ExternalLinkButtonProps & RefAttributes<HTMLAnchorElement>>;
export { ExternalLinkButton };
//# sourceMappingURL=ExternalLinkButton.d.ts.map