import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { AutocompleteInputProps, AutocompletePositionerProps, AutocompletePopupProps, ComboboxItemProps, ComboboxItemIndicatorProps, AutocompleteEmptyProps, AutocompleteGroupProps, AutocompleteGroupLabelProps } from '@base-ui/react';
type ComboboxRootProps = ComponentPropsWithoutRef<typeof BaseCombobox.Root>;
declare function ComboboxRoot(props: ComboboxRootProps): React.JSX.Element;
declare namespace ComboboxRoot {
    var displayName: string;
}
type ComboboxInputProps = ComponentPropsWithoutRef<typeof BaseCombobox.Input>;
type ComboboxPortalProps = ComponentPropsWithoutRef<typeof BaseCombobox.Portal>;
declare function ComboboxPortal(props: ComboboxPortalProps): React.JSX.Element;
declare namespace ComboboxPortal {
    var displayName: string;
}
type ComboboxPositionerProps = ComponentPropsWithoutRef<typeof BaseCombobox.Positioner>;
type ComboboxPopupProps = ComponentPropsWithoutRef<typeof BaseCombobox.Popup>;
type ComboboxItemProps = ComponentPropsWithoutRef<typeof BaseCombobox.Item>;
type ComboboxItemIndicatorProps = ComponentPropsWithoutRef<typeof BaseCombobox.ItemIndicator>;
type ComboboxEmptyProps = ComponentPropsWithoutRef<typeof BaseCombobox.Empty>;
type ComboboxGroupProps = ComponentPropsWithoutRef<typeof BaseCombobox.Group>;
type ComboboxGroupLabelProps = ComponentPropsWithoutRef<typeof BaseCombobox.GroupLabel>;
export declare const Combobox: {
    Root: typeof ComboboxRoot;
    Input: React.ForwardRefExoticComponent<Omit<Omit< AutocompleteInputProps, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
    Portal: typeof ComboboxPortal;
    Positioner: React.ForwardRefExoticComponent<Omit<Omit< AutocompletePositionerProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Popup: React.ForwardRefExoticComponent<Omit<Omit< AutocompletePopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<Omit< ComboboxItemProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<Omit<Omit< ComboboxItemIndicatorProps, "ref"> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Empty: React.ForwardRefExoticComponent<Omit<Omit< AutocompleteEmptyProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<Omit<Omit< AutocompleteGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    GroupLabel: React.ForwardRefExoticComponent<Omit<Omit< AutocompleteGroupLabelProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export type { ComboboxRootProps, ComboboxInputProps, ComboboxPortalProps, ComboboxPositionerProps, ComboboxPopupProps, ComboboxItemProps, ComboboxItemIndicatorProps, ComboboxEmptyProps, ComboboxGroupProps, ComboboxGroupLabelProps, };
//# sourceMappingURL=Combobox.d.ts.map