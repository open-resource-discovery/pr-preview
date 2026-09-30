import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
export type InfoCardRootProps = ComponentPropsWithoutRef<"div">;
export type InfoCardHeaderProps = ComponentPropsWithoutRef<"div">;
export interface InfoCardIconProps {
    children?: ReactNode;
    className?: string;
}
declare function InfoCardIcon({ children, className }: InfoCardIconProps): React.JSX.Element;
declare namespace InfoCardIcon {
    var displayName: string;
}
export type InfoCardTitleProps = ComponentPropsWithoutRef<"h2">;
export type InfoCardSubtitleProps = ComponentPropsWithoutRef<"p">;
export type InfoCardContentProps = ComponentPropsWithoutRef<"div">;
export type InfoCardSectionProps = ComponentPropsWithoutRef<"div">;
export declare const InfoCard: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Icon: typeof InfoCardIcon;
    Title: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Subtitle: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Content: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Section: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=InfoCard.d.ts.map