import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { SwitchRootProps, SwitchThumbProps } from '@base-ui/react';
type SwitchRootProps = ComponentPropsWithoutRef<typeof BaseSwitch.Root>;
type SwitchThumbProps = ComponentPropsWithoutRef<typeof BaseSwitch.Thumb>;
export declare const Switch: {
    Root: ForwardRefExoticComponent<Omit<Omit< SwitchRootProps, "ref"> & RefAttributes<HTMLElement>, "ref"> & RefAttributes<HTMLButtonElement>>;
    Thumb: ForwardRefExoticComponent<Omit<Omit< SwitchThumbProps, "ref"> & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;
};
export type { SwitchRootProps, SwitchThumbProps };
//# sourceMappingURL=Switch.d.ts.map