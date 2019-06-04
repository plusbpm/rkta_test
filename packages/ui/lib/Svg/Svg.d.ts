import React from 'react';
import { Props as AtomProps } from '../Atom/Atom';
export interface Props extends AtomProps {
    block?: boolean;
    color?: string;
    size?: number;
    element?: never;
}
declare const Svg: ({ children, ...rest }: Props) => React.ReactNode;
export default Svg;
