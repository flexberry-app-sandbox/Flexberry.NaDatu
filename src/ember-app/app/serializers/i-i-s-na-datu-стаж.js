import { Serializer as СтажSerializer } from
  '../mixins/regenerated/serializers/i-i-s-na-datu-стаж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтажSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
