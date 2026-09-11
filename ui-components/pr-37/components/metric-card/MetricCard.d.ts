import { ComponentPropsWithoutRef, ReactNode, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
export type TrendDirection = "up" | "down" | "flat";
export type TrendTone = "success" | "critical" | "neutral";
export interface MetricTrend {
    direction: TrendDirection;
    /** Pre-formatted by the caller (e.g. "+12.5%"). No ambient number/locale formatting here. */
    value: ReactNode;
    /** Overrides the direction-derived tone (up→success, down→critical, flat→neutral). */
    tone?: TrendTone;
    /** Accessible description of the trend (no default text). */
    label?: string;
}
export interface MetricCardProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
    /** Metric name. */
    label: ReactNode;
    /** Pre-formatted metric value (caller owns locale/number formatting). */
    value: ReactNode;
    /** Supplementary context shown beside the trend. */
    detail?: ReactNode;
    trend?: MetricTrend;
    /** Optional icon shown in the top-right corner. */
    icon?: ReactNode;
}
/**
 * A KPI tile presenting a label, value, optional detail, and an optional trend indicator.
 * Reuses the Card surface. The caller pre-formats `value` and `trend.value`; the component
 * performs no locale/number formatting.
 */
declare const MetricCard: ForwardRefExoticComponent<MetricCardProps & RefAttributes<HTMLDivElement>>;
export { MetricCard };
//# sourceMappingURL=MetricCard.d.ts.map