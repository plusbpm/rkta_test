/// <reference types="react" />
import { ThemeInterface } from './theme/theme.types';
export interface ContextInterface {
    theme: ThemeInterface;
    replaceTheme?: (nextTheme: ThemeInterface) => void;
}
declare const _default: import("react").Context<ContextInterface>;
export default _default;
