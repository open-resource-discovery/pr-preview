import { ComponentPropsWithoutRef, ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
type CardRootProps = ComponentPropsWithoutRef<"div">;
type CardHeaderProps = ComponentPropsWithoutRef<"div">;
type CardTitleProps = ComponentPropsWithoutRef<"h3">;
type CardDescriptionProps = ComponentPropsWithoutRef<"p">;
type CardContentProps = ComponentPropsWithoutRef<"div">;
type CardFooterProps = ComponentPropsWithoutRef<"div">;
export declare const Card: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>> & {
    Header: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Title: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & RefAttributes<HTMLHeadingElement>>;
    Description: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & RefAttributes<HTMLParagraphElement>>;
    Content: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Footer: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
};
export type { CardRootProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps };
//# sourceMappingURL=Card.d.ts.map