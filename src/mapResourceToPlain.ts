import { values, pick } from 'lodash';

const mapResourceToPlain = <T>(fields: string[], resource: T): Partial<T> => pick(resource, values(fields));

export default mapResourceToPlain;
