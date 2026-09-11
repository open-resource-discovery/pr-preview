import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
export type ChatMessageProps = ComponentPropsWithoutRef<"div"> & {
    role: "user" | "agent";
    timestamp?: Date | string;
    icon?: ReactNode;
    onCopy?: () => void;
    onRetry?: () => void;
    status?: ReactNode;
};
export declare const ChatMessage: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    role: "user" | "agent";
    timestamp?: Date | string;
    icon?: ReactNode;
    onCopy?: () => void;
    onRetry?: () => void;
    status?: ReactNode;
} & RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ChatMessage.d.ts.map