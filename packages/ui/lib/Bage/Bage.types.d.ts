/// <reference types="react" />
import { RktaThemed, CssEmotion } from '../Provider/theme/theme.types';
export default interface BageProps extends RktaThemed {
    children: React.ReactNode;
    css?: CssEmotion;
    element?: React.ElementType;
    fitAll?: boolean;
    fitLeft?: boolean;
    fitRight?: boolean;
}
