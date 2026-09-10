import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
export interface SelectItem {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectGroup {
    label: string;
    items: SelectItem[];
}
export interface SimpleSelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
    items: (SelectItem | SelectGroup)[];
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}
export declare const SimpleSelect: React.ForwardRefExoticComponent<SimpleSelectProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SimpleSelect.d.ts.map