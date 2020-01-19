import { keyBy, mapValues, flowRight } from 'lodash/fp';

const mapArrayToObject = <T>(keyMappper: string) => (valueMapper: (x: Record<string, T>) => T) => (
  xs: Record<string, T>[],
): Record<string, T> => {
  return flowRight(mapValues(valueMapper), keyBy(keyMappper))(xs);
};

export default mapArrayToObject;
