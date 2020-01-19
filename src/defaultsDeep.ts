import { defaultsDeep as dp } from 'lodash';

const defaultsDeep = <T>(...args: T[]): T => dp({}, ...args);

export default defaultsDeep;
