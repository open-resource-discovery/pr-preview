import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { SelectTriggerProps, SelectValueProps, SelectIconProps, SelectPositionerProps, SelectPopupProps, SelectItemProps, SelectItemIndicatorProps, SelectItemTextProps, SelectGroupProps, SelectGroupLabelProps, SelectScrollUpArrowProps, SelectScrollDownArrowProps } from '@base-ui/react';
type SelectRootProps = ComponentPropsWithoutRef<typeof BaseSelect.Root>;
declare function SelectRoot(props: SelectRootProps): React.JSX.Element;
declare namespace SelectRoot {
    var displayName: string;
}
type SelectTriggerProps = ComponentPropsWithoutRef<typeof BaseSelect.Trigger>;
type SelectValueProps = ComponentPropsWithoutRef<typeof BaseSelect.Value>;
type SelectIconProps = ComponentPropsWithoutRef<typeof BaseSelect.Icon>;
type SelectPortalProps = ComponentPropsWithoutRef<typeof BaseSelect.Portal>;
declare function SelectPortal(props: SelectPortalProps): React.JSX.Element;
declare namespace SelectPortal {
    var displayName: string;
}
type SelectPositionerProps = ComponentPropsWithoutRef<typeof BaseSelect.Positioner>;
type SelectPopupProps = ComponentPropsWithoutRef<typeof BaseSelect.Popup>;
type SelectItemProps = ComponentPropsWithoutRef<typeof BaseSelect.Item>;
type SelectItemIndicatorProps = ComponentPropsWithoutRef<typeof BaseSelect.ItemIndicator>;
type SelectItemTextProps = ComponentPropsWithoutRef<typeof BaseSelect.ItemText>;
type SelectGroupProps = ComponentPropsWithoutRef<typeof BaseSelect.Group>;
type SelectGroupLabelProps = ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>;
type SelectScrollUpArrowProps = ComponentPropsWithoutRef<typeof BaseSelect.ScrollUpArrow>;
type SelectScrollDownArrowProps = ComponentPropsWithoutRef<typeof BaseSelect.ScrollDownArrow>;
export declare const Select: {
    Root: typeof SelectRoot;
    Trigger: React.ForwardRefExoticComponent<Omit<Omit< SelectTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Value: React.ForwardRefExoticComponent<Omit<Omit< SelectValueProps, "ref"> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Icon: React.ForwardRefExoticComponent<Omit<Omit< SelectIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Portal: typeof SelectPortal;
    Positioner: React.ForwardRefExoticComponent<Omit<Omit< SelectPositionerProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Popup: React.ForwardRefExoticComponent<Omit<Omit< SelectPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<Omit< SelectItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<Omit<Omit< SelectItemIndicatorProps, "ref"> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    ItemText: React.ForwardRefExoticComponent<Omit<Omit< SelectItemTextProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<Omit<Omit< SelectGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    GroupLabel: React.ForwardRefExoticComponent<Omit<Omit< SelectGroupLabelProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ScrollUpArrow: React.ForwardRefExoticComponent<Omit<Omit< SelectScrollUpArrowProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ScrollDownArrow: React.ForwardRefExoticComponent<Omit<Omit< SelectScrollDownArrowProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export type { SelectRootProps, SelectTriggerProps, SelectValueProps, SelectIconProps, SelectPortalProps, SelectPositionerProps, SelectPopupProps, SelectItemProps, SelectItemIndicatorProps, SelectItemTextProps, SelectGroupProps, SelectGroupLabelProps, SelectScrollUpArrowProps, SelectScrollDownArrowProps, };
//# sourceMappingURL=Select.d.ts.map