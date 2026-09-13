import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { TooltipPositionerProps, TooltipPopupProps, TooltipArrowProps } from '@base-ui/react';
type TooltipProviderProps = ComponentPropsWithoutRef<typeof BaseTooltip.Provider>;
declare function TooltipProvider(props: TooltipProviderProps): React.JSX.Element;
declare namespace TooltipProvider {
    var displayName: string;
}
type TooltipRootProps = ComponentPropsWithoutRef<typeof BaseTooltip.Root>;
declare function TooltipRoot(props: TooltipRootProps): React.JSX.Element;
declare namespace TooltipRoot {
    var displayName: string;
}
type TooltipTriggerProps = ComponentPropsWithoutRef<typeof BaseTooltip.Trigger>;
type TooltipPortalProps = ComponentPropsWithoutRef<typeof BaseTooltip.Portal>;
declare function TooltipPortal(props: TooltipPortalProps): React.JSX.Element;
declare namespace TooltipPortal {
    var displayName: string;
}
type TooltipPositionerProps = ComponentPropsWithoutRef<typeof BaseTooltip.Positioner>;
type TooltipPopupProps = ComponentPropsWithoutRef<typeof BaseTooltip.Popup>;
type TooltipArrowProps = ComponentPropsWithoutRef<typeof BaseTooltip.Arrow>;
export declare const Tooltip: {
    Provider: typeof TooltipProvider;
    Root: typeof TooltipRoot;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseTooltip.Trigger.Props<unknown> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Portal: typeof TooltipPortal;
    Positioner: React.ForwardRefExoticComponent<Omit<Omit< TooltipPositionerProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Popup: React.ForwardRefExoticComponent<Omit<Omit< TooltipPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Arrow: React.ForwardRefExoticComponent<Omit<Omit< TooltipArrowProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export type { TooltipProviderProps, TooltipRootProps, TooltipTriggerProps, TooltipPortalProps, TooltipPositionerProps, TooltipPopupProps, TooltipArrowProps, };
//# sourceMappingURL=Tooltip.d.ts.map