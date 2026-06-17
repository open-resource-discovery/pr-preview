import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
export type ValidationStatus = "pass" | "fail" | "warning";
export interface ValidationEntryProps extends ComponentPropsWithoutRef<"div"> {
    status: ValidationStatus;
    rule: string;
    message: string;
    path?: string;
}
export declare const ValidationEntry: ForwardRefExoticComponent<ValidationEntryProps & RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ValidationEntry.d.ts.map