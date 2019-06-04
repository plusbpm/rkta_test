import { SFC, ReactNode, ElementType } from 'react';
import { CssEmotion, RktaThemed } from '../Provider/theme/theme.types';
export interface Props extends RktaThemed {
    atomRef?: object;
    css?: CssEmotion;
    children?: ReactNode;
    element?: ElementType;
}
declare const Atom: SFC<Props>;
export default Atom;
