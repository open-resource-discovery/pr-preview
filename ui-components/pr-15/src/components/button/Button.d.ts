import { ButtonHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/types';
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=Button.d.ts.map