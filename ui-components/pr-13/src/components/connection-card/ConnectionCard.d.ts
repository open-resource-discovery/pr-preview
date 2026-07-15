import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes, DetailedHTMLProps, HTMLAttributes } from '../../../node_modules/react';
export interface ConnectionCardRootProps extends ComponentPropsWithoutRef<"div"> {
    selected?: boolean;
}
export type ConnectionCardHeaderProps = ComponentPropsWithoutRef<"div">;
export type ConnectionCardTitleProps = ComponentPropsWithoutRef<"h3">;
export type ConnectionCardDescriptionProps = ComponentPropsWithoutRef<"p">;
export type ConnectionCardTagsProps = ComponentPropsWithoutRef<"div">;
export declare const ConnectionCard: ForwardRefExoticComponent<ConnectionCardRootProps & RefAttributes<HTMLDivElement>> & {
    Header: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Title: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & RefAttributes<HTMLHeadingElement>>;
    Description: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & RefAttributes<HTMLParagraphElement>>;
    Tags: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=ConnectionCard.d.ts.map