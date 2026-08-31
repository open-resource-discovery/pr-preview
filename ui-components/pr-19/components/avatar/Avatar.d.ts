import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import { VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/types';
import { AvatarRootProps, AvatarImageProps, AvatarFallbackProps } from '@base-ui/react';
declare const avatarRootVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
export type AvatarRootProps = ComponentPropsWithoutRef<typeof BaseAvatar.Root> & VariantProps<typeof avatarRootVariants>;
export type AvatarImageProps = ComponentPropsWithoutRef<typeof BaseAvatar.Image>;
export type AvatarFallbackProps = ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>;
export declare const Avatar: {
    Root: ForwardRefExoticComponent<Omit<Omit< AvatarRootProps, "ref"> & RefAttributes<HTMLSpanElement>, "ref"> & VariantProps<(props?: ({
        size?: "default" | "sm" | "lg" | null | undefined;
    } & ClassProp) | undefined) => string> & RefAttributes<HTMLSpanElement>>;
    Image: ForwardRefExoticComponent<Omit<Omit< AvatarImageProps, "ref"> & RefAttributes<HTMLImageElement>, "ref"> & RefAttributes<HTMLImageElement>>;
    Fallback: ForwardRefExoticComponent<Omit<Omit< AvatarFallbackProps, "ref"> & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;
};
export {};
//# sourceMappingURL=Avatar.d.ts.map