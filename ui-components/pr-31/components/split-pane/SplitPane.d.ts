import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
type Orientation = "horizontal" | "vertical";
export type SplitPaneRootProps = ComponentPropsWithoutRef<"div"> & {
    orientation?: Orientation;
    autoSaveId?: string;
    children: ReactNode;
};
export type SplitPanelProps = ComponentPropsWithoutRef<"div"> & {
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    collapsible?: boolean;
    collapsedSize?: number;
    onCollapse?: () => void;
    onExpand?: () => void;
    children: ReactNode;
};
export type SplitPaneHandleProps = ComponentPropsWithoutRef<"div"> & {
    showGrip?: boolean;
};
export declare const SplitPane: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    orientation?: Orientation;
    autoSaveId?: string;
    children: ReactNode;
} & RefAttributes<HTMLDivElement>> & {
    Root: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        orientation?: Orientation;
        autoSaveId?: string;
        children: ReactNode;
    } & RefAttributes<HTMLDivElement>>;
    Panel: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        defaultSize?: number;
        minSize?: number;
        maxSize?: number;
        collapsible?: boolean;
        collapsedSize?: number;
        onCollapse?: () => void;
        onExpand?: () => void;
        children: ReactNode;
    } & RefAttributes<HTMLDivElement>>;
    Handle: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        showGrip?: boolean;
    } & RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=SplitPane.d.ts.map