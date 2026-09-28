import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
export interface SimpleSheetProps extends Omit<ComponentPropsWithoutRef<"div">, "title" | "children"> {
    trigger?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    showClose?: boolean;
}
export declare const SimpleSheet: React.ForwardRefExoticComponent<SimpleSheetProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SimpleSheet.d.ts.map