import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { Progress as BaseProgress } from '@base-ui/react/progress';
import { ProgressRootProps, ProgressTrackProps, ProgressIndicatorProps } from '@base-ui/react';
export type ProgressRootProps = ComponentPropsWithoutRef<typeof BaseProgress.Root>;
export type ProgressTrackProps = ComponentPropsWithoutRef<typeof BaseProgress.Track>;
export type ProgressIndicatorProps = ComponentPropsWithoutRef<typeof BaseProgress.Indicator>;
export declare const Progress: {
    Root: ForwardRefExoticComponent<Omit<Omit< ProgressRootProps, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Track: ForwardRefExoticComponent<Omit<Omit< ProgressTrackProps, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
    Indicator: ForwardRefExoticComponent<Omit<Omit< ProgressIndicatorProps, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Progress.d.ts.map