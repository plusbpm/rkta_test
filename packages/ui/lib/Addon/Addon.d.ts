import React from 'react';
import { Props as AtomProps } from '../Atom/Atom';
export interface Props extends AtomProps {
    children: React.ReactNode;
    fitAll?: boolean;
    fitLeft?: boolean;
    fitRight?: boolean;
}
declare const Addon: ({ children, ...rest }: Props) => React.ReactNode;
export default Addon;
