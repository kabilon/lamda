import { map } from 'lodash';
import { get } from 'lodash/fp';

const pluck = <T, K extends keyof T>(key: K) => (array: T[]): T[] => map(array, get(key));

export default pluck;
