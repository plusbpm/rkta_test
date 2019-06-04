import React from 'react';
import { Props as AtomProps } from '../Atom/Atom';
export interface Props extends AtomProps {
    dotted?: boolean;
    fitAll?: boolean;
    fitBottom?: boolean;
    fitTop?: boolean;
    inset?: boolean;
    invisible?: boolean;
}
declare const Divider: (props: Props) => React.ReactNode;
export default Divider;
