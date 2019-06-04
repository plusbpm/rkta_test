import { SFC } from 'react';
import { RktaThemed } from '../Provider/theme/theme.types';
declare function themed(name: string, Component: Function): SFC<RktaThemed>;
export default themed;
