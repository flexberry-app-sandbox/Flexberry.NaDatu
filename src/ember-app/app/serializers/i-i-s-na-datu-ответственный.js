import { Serializer as ОтветственныйSerializer } from
  '../mixins/regenerated/serializers/i-i-s-na-datu-ответственный';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтветственныйSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
