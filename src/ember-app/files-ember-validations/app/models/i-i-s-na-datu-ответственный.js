import {
  defineNamespace,
  defineProjections,
  Model as ОтветственныйMixin
} from '../mixins/regenerated/models/i-i-s-na-datu-ответственный';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтветственныйMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
