import { transform } from 'lodash';

const mapObject = <T>(map: (value: T, key: string) => [T, string]) => (x: Record<string, T>): {} =>
  transform(
    x,
    (acc: Record<string, T>, value: T, key: string) => {
      [value, key] = map(value, key);
      acc[key] = value;
      return acc;
    },
    {},
  );

export default mapObject;
