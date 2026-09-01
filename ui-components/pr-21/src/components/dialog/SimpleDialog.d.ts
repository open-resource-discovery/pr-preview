import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
export interface SimpleDialogProps extends Omit<ComponentPropsWithoutRef<"div">, "title" | "children"> {
    trigger?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    showClose?: boolean;
}
export declare const SimpleDialog: React.ForwardRefExoticComponent<SimpleDialogProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SimpleDialog.d.ts.map