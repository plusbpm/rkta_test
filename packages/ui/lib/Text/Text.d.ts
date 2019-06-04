import React from 'react';
import { Props as AtomProps } from '../Atom/Atom';
export interface Props extends AtomProps {
    color?: 'primary' | 'primary1' | 'primary2' | 'secondary' | 'secondary2' | 'text' | 'divider' | 'paper' | 'paper1' | 'paper3' | 'success' | 'warning' | 'color1' | 'color2' | 'color3' | 'color4' | 'color5' | 'color6' | 'color7' | 'color8' | 'color9' | 'color10' | 'color11' | 'color12' | 'color13' | 'color14' | 'color15' | 'color16' | string;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    subtitle1?: boolean;
    subtitle2?: boolean;
    body2?: boolean;
    button?: boolean;
    caption?: boolean;
    overline?: boolean;
    serif?: boolean;
    monospace?: boolean;
    uppercase?: boolean;
    baseline?: boolean;
    muted?: boolean;
    center?: boolean;
    etched?: boolean;
    readOnly?: boolean;
    nowrap?: boolean;
    wrap?: boolean;
    hyphens?: boolean;
}
declare const Font: {
    ({ children, element, ...rest }: Props): React.ReactNode;
    defaultProps: {
        element: string;
    };
};
export default Font;
