import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { DialogTriggerProps, AlertDialogBackdropProps, AlertDialogPopupProps, AlertDialogTitleProps, AlertDialogDescriptionProps, AlertDialogCloseProps } from '@base-ui/react';
type DialogRootProps = ComponentPropsWithoutRef<typeof BaseDialog.Root>;
declare function DialogRoot(props: DialogRootProps): React.JSX.Element;
declare namespace DialogRoot {
    var displayName: string;
}
type DialogTriggerProps = ComponentPropsWithoutRef<typeof BaseDialog.Trigger>;
type DialogPortalProps = ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
declare function DialogPortal(props: DialogPortalProps): React.JSX.Element;
declare namespace DialogPortal {
    var displayName: string;
}
type DialogBackdropProps = ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>;
type DialogPopupProps = ComponentPropsWithoutRef<typeof BaseDialog.Popup>;
type DialogTitleProps = ComponentPropsWithoutRef<typeof BaseDialog.Title>;
type DialogDescriptionProps = ComponentPropsWithoutRef<typeof BaseDialog.Description>;
type DialogCloseProps = ComponentPropsWithoutRef<typeof BaseDialog.Close>;
export declare const Dialog: {
    Root: typeof DialogRoot;
    Trigger: React.ForwardRefExoticComponent<Omit< DialogTriggerProps<unknown> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Portal: typeof DialogPortal;
    Backdrop: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Popup: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Close: React.ForwardRefExoticComponent<Omit<Omit< AlertDialogCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};
export type { DialogRootProps, DialogTriggerProps, DialogPortalProps, DialogBackdropProps, DialogPopupProps, DialogTitleProps, DialogDescriptionProps, DialogCloseProps, };
//# sourceMappingURL=Dialog.d.ts.map