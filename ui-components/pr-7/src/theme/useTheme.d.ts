type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";
export declare function useTheme(defaultTheme?: Theme): {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (newTheme: Theme) => void;
};
export {};
//# sourceMappingURL=useTheme.d.ts.map