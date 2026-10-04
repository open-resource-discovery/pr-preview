import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
import { CodeBlock } from '../code-block';
export type HttpLogEntryEditPayload = {
    headers: Record<string, string>;
    body: string;
};
export type HttpLogEntryProps = ComponentPropsWithoutRef<"div"> & {
    method: string;
    url: string;
    statusCode?: number;
    duration?: number;
    timestamp?: Date | string;
    requestBody?: string;
    requestHeaders?: Record<string, string>;
    responseBody?: string;
    responseStatus?: string;
    error?: string;
    highlighted?: boolean;
    defaultOpen?: boolean;
    highlighter?: Parameters<typeof CodeBlock>[0]["highlighter"];
    extraBadges?: ReactNode;
    responseBodyContent?: ReactNode;
    onResend?: () => void;
    onCopy?: () => void;
    onEdit?: (payload: HttpLogEntryEditPayload) => void;
};
export declare const HttpLogEntry: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    method: string;
    url: string;
    statusCode?: number;
    duration?: number;
    timestamp?: Date | string;
    requestBody?: string;
    requestHeaders?: Record<string, string>;
    responseBody?: string;
    responseStatus?: string;
    error?: string;
    highlighted?: boolean;
    defaultOpen?: boolean;
    highlighter?: Parameters<typeof CodeBlock>[0]["highlighter"];
    extraBadges?: ReactNode;
    responseBodyContent?: ReactNode;
    onResend?: () => void;
    onCopy?: () => void;
    onEdit?: (payload: HttpLogEntryEditPayload) => void;
} & RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HttpLogEntry.d.ts.map