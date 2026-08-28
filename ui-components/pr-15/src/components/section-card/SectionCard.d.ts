import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
export type SectionCardRootProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
};
export type SectionCardHeaderProps = ComponentPropsWithoutRef<"div"> & {
    icon?: ReactNode;
    title: string;
    badges?: ReactNode;
};
export type SectionCardContentProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
};
export declare const SectionCard: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    children: ReactNode;
} & RefAttributes<HTMLDivElement>> & {
    Root: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        children: ReactNode;
    } & RefAttributes<HTMLDivElement>>;
    Header: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        icon?: ReactNode;
        title: string;
        badges?: ReactNode;
    } & RefAttributes<HTMLDivElement>>;
    Content: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        children: ReactNode;
    } & RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=SectionCard.d.ts.map