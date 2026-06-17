import { ComponentPropsWithoutRef, ForwardRefExoticComponent, DetailedHTMLProps, FormHTMLAttributes, RefAttributes } from '../../../node_modules/react';
export type ChatInputProps = Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> & {
    onSubmit?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    onCancel?: () => void;
};
export declare const ChatInput: ForwardRefExoticComponent<Omit<Omit< DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref">, "onSubmit"> & {
    onSubmit?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    onCancel?: () => void;
} & RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=ChatInput.d.ts.map