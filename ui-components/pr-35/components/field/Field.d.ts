import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { Field as BaseField } from '@base-ui/react/field';
export interface FieldRootProps extends ComponentPropsWithoutRef<typeof BaseField.Root> {
    className?: string;
}
export interface FieldLabelProps extends ComponentPropsWithoutRef<typeof BaseField.Label> {
    className?: string;
}
export interface FieldDescriptionProps extends ComponentPropsWithoutRef<typeof BaseField.Description> {
    className?: string;
}
export interface FieldErrorProps extends ComponentPropsWithoutRef<typeof BaseField.Error> {
    className?: string;
}
export declare const Field: {
    Root: ForwardRefExoticComponent<FieldRootProps & RefAttributes<HTMLDivElement>>;
    Label: ForwardRefExoticComponent<FieldLabelProps & RefAttributes<HTMLLabelElement>>;
    Description: ForwardRefExoticComponent<FieldDescriptionProps & RefAttributes<HTMLParagraphElement>>;
    Error: ForwardRefExoticComponent<FieldErrorProps & RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Field.d.ts.map