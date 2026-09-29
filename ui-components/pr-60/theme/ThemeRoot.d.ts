import { CSSProperties, ReactNode } from '../../node_modules/react';
export declare const usePortalContainer: () => HTMLElement | null;
interface ThemeRootProps {
    children: ReactNode;
    defaultTheme?: "light" | "dark" | "system";
    className?: string;
    style?: CSSProperties;
}
export declare function ThemeRoot({ children, defaultTheme, className, style }: ThemeRootProps): ReactNode;
export {};
//# sourceMappingURL=ThemeRoot.d.ts.map