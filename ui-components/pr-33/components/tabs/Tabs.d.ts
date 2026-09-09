import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { TabsRootProps, TabsListProps, TabsTabProps, TabsPanelProps, TabsIndicatorProps } from '@base-ui/react';
type TabsRootProps = ComponentPropsWithoutRef<typeof BaseTabs.Root>;
type TabsListProps = ComponentPropsWithoutRef<typeof BaseTabs.List>;
type TabsTabProps = ComponentPropsWithoutRef<typeof BaseTabs.Tab>;
type TabsPanelProps = ComponentPropsWithoutRef<typeof BaseTabs.Panel>;
type TabsIndicatorProps = ComponentPropsWithoutRef<typeof BaseTabs.Indicator>;
export declare const Tabs: {
    Root: ForwardRefExoticComponent<Omit<Omit< TabsRootProps, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    List: ForwardRefExoticComponent<Omit<Omit< TabsListProps, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Tab: ForwardRefExoticComponent<Omit<Omit< TabsTabProps, "ref"> & RefAttributes<HTMLElement>, "ref"> & RefAttributes<HTMLButtonElement>>;
    Panel: ForwardRefExoticComponent<Omit<Omit< TabsPanelProps, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Indicator: ForwardRefExoticComponent<Omit<Omit< TabsIndicatorProps, "ref"> & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;
};
export type { TabsRootProps, TabsListProps, TabsTabProps, TabsPanelProps, TabsIndicatorProps };
//# sourceMappingURL=Tabs.d.ts.map