import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { CheckboxIndicatorProps } from '@base-ui/react';
export interface CheckboxProps extends ComponentPropsWithoutRef<typeof BaseCheckbox.Root> {
    className?: string;
}
export declare const Checkbox: {
    Root: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLSpanElement>>;
    Indicator: React.ForwardRefExoticComponent<Omit<Omit< CheckboxIndicatorProps, "ref"> & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        className?: string;
    } & React.RefAttributes<HTMLSpanElement>>;
};
//# sourceMappingURL=Checkbox.d.ts.map