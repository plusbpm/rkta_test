import * as React from 'react';
import { ThemeInterface } from './theme/theme.types';
interface ProviderProps {
    theme?: ThemeInterface;
}
interface ProviderState {
    theme: ThemeInterface;
}
export default class Provider extends React.Component<ProviderProps, ProviderState> {
    constructor(props: ProviderProps);
    private replaceTheme;
    render(): React.ReactNode;
}
export {};
