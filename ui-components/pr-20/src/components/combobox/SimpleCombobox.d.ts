import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
export interface ComboboxItem {
    value: string;
    label: string;
}
export interface SimpleComboboxProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
    items: ComboboxItem[];
    placeholder?: string;
    maxVisibleItems?: number;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}
export declare const SimpleCombobox: React.ForwardRefExoticComponent<SimpleComboboxProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SimpleCombobox.d.ts.map