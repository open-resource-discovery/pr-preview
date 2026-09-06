import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/types';
import { DialogTriggerProps, AlertDialogBackdropProps, AlertDialogPopupProps, AlertDialogTitleProps, AlertDialogDescriptionProps, AlertDialogCloseProps } from '@base-ui/react';
type SheetRootProps = ComponentPropsWithoutRef<typeof BaseDialog.Root>;
declare function SheetRoot(props: SheetRootProps): React.JSX.Element;
declare namespace SheetRoot {
    var displayName: string;
}
type SheetTriggerProps = ComponentPropsWithoutRef<typeof BaseDialog.Trigger>;
type SheetPortalProps = ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
declare function SheetPortal(props: SheetPortalProps): React.JSX.Element;
declare namespace SheetPortal {
    var displayName: string;
}
type SheetBackdropProps = ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>;
declare const sheetPopupVariants: (props?: ({
    side?: "top" | "bottom" | "left" | "right" | null | undefined;
} & ClassProp) | undefined) => string;
type SheetPopupProps = ComponentPropsWithoutRef<typeof BaseDialog.Popup> & VariantProps<typeof sheetPopupVariants>;
type SheetTitleProps = ComponentPropsWithoutRef<typeof BaseDialog.Title>;
type SheetDescriptionProps = ComponentPropsWithoutRef<typeof BaseDialog.Description>;
type SheetCloseProps = ComponentPropsWithoutRef<typeof BaseDialog.Close>;
export declare const Sheet: {
    Root: typeof SheetRoot;
    Trigger: React.ForwardRefExoticComponent<Omit< DialogTriggerProps<unknown> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Portal: typeof SheetPortal;
    Backdrop: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Popup: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
        side?: "top" | "bottom" | "left" | "right" | null | undefined;
    } & ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Close: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};
export { sheetPopupVariants };
export type { SheetRootProps, SheetTriggerProps, SheetPortalProps, SheetBackdropProps, SheetPopupProps, SheetTitleProps, SheetDescriptionProps, SheetCloseProps, };
//# sourceMappingURL=Sheet.d.ts.map