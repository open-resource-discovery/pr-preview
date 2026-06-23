import { ComponentPropsWithoutRef, ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
type HighlighterLike = {
    codeToHtml: (code: string, options: Record<string, unknown>) => string;
};
export type CodeBlockProps = ComponentPropsWithoutRef<"div"> & {
    code: string;
    language?: string;
    filename?: string;
    highlighter?: HighlighterLike;
    lightTheme?: string;
    darkTheme?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    onCopy?: (code: string) => void;
    maxHeight?: string;
};
export declare const CodeBlock: ForwardRefExoticComponent<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    code: string;
    language?: string;
    filename?: string;
    highlighter?: HighlighterLike;
    lightTheme?: string;
    darkTheme?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    onCopy?: (code: string) => void;
    maxHeight?: string;
} & RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=CodeBlock.d.ts.map