import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
import { Collapsible } from '@base-ui/react/collapsible';
export interface CollapsibleSectionRootProps extends ComponentPropsWithoutRef<typeof Collapsible.Root> {
    className?: string;
    bordered?: boolean;
}
declare function CollapsibleSectionRoot({ className, bordered, ...props }: CollapsibleSectionRootProps): React.JSX.Element;
declare namespace CollapsibleSectionRoot {
    var displayName: string;
}
export interface CollapsibleSectionTriggerProps extends ComponentPropsWithoutRef<typeof Collapsible.Trigger> {
    className?: string;
    children: ReactNode;
    icon?: ReactNode;
    badges?: ReactNode;
    description?: string;
}
export interface CollapsibleSectionContentProps extends ComponentPropsWithoutRef<typeof Collapsible.Panel> {
    className?: string;
}
export declare const CollapsibleSection: {
    Root: typeof CollapsibleSectionRoot;
    Trigger: React.ForwardRefExoticComponent<CollapsibleSectionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<CollapsibleSectionContentProps & React.RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=CollapsibleSection.d.ts.map