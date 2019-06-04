import React from 'react';
import { InterpolationWithTheme } from '@emotion/core';
declare type initialStyleFunction = (theme: ThemeInterface, props: any) => CssRkta;
export declare type CssEmotion = InterpolationWithTheme<any>;
export declare type CssRkta = CssEmotion | initialStyleFunction;
export interface RktaThemed {
    css?: CssRkta;
    [key: string]: CssRkta | React.ReactNode;
}
export interface RktaComponentStyles {
    initialStyle?: CssRkta;
    [key: string]: CssRkta;
}
export interface ThemeInterface {
    color: {
        [key: string]: string;
    };
    [key: string]: RktaComponentStyles;
}
export {};
