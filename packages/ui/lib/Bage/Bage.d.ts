import React from 'react';
import { CssEmotion } from '../Provider/theme/theme.types';
import { Props as PropsProps } from '../Paper/Paper';
interface Props extends PropsProps {
    children: React.ReactNode;
    css?: CssEmotion;
    element?: React.ElementType;
    fitAll?: boolean;
    fitLeft?: boolean;
    fitRight?: boolean;
}
declare const Bage: (props: Props) => React.ReactNode;
export default Bage;
