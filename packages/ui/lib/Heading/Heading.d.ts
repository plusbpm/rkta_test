import React from 'react';
import { Props as TextProps } from '../Text/Text';
export interface Props extends TextProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    h1?: never;
    h2?: never;
    h3?: never;
    h4?: never;
    h5?: never;
    h6?: never;
}
declare const Header: ({ level, ...rest }: Props) => React.ReactNode;
export default Header;
