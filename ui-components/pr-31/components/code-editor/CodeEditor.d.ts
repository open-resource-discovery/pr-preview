import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
export interface CodeEditorProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    value: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
    language?: string;
    readOnly?: boolean;
    lineNumbers?: "on" | "off";
    minHeight?: string;
    height?: string;
    showToolbar?: boolean;
}
export declare const CodeEditor: ForwardRefExoticComponent<CodeEditorProps & RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CodeEditor.d.ts.map