import mapResourceToPlain from './mapResourceToPlain';
import { fromJS } from 'immutable';

const mapResourceToImmutable = <T>(fields: string[], resource: T): Map<string, T> =>
  fromJS(mapResourceToPlain(fields, resource));

export default mapResourceToImmutable;
