import { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/types';
declare const spinnerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
export interface SpinnerProps extends HTMLAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
}
declare const Spinner: ForwardRefExoticComponent<SpinnerProps & RefAttributes<SVGSVGElement>>;
export { Spinner, spinnerVariants };
//# sourceMappingURL=Spinner.d.ts.map