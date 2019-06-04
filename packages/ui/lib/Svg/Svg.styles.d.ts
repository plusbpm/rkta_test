import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';
export declare const initialStyle: CssRkta;
export declare const block: CssRkta;
export declare const color: (theme: ThemeInterface, props: {
    color: string;
}) => CssRkta;
export declare const size: (theme: ThemeInterface, props: {
    size: number;
}) => CssRkta;
