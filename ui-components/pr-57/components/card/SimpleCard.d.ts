import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
export interface SimpleCardProps extends Omit<ComponentPropsWithoutRef<"div">, "title" | "content"> {
    title?: ReactNode;
    description?: ReactNode;
    content?: ReactNode;
    buttons?: ReactNode;
}
export declare const SimpleCard: React.ForwardRefExoticComponent<SimpleCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SimpleCard.d.ts.map