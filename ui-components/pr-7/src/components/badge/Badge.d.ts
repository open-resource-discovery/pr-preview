import { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/types';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "highlight" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;
export { Badge, badgeVariants };
//# sourceMappingURL=Badge.d.ts.map