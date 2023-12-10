import {
  defineNamespace,
  defineProjections,
  Model as СтажMixin
} from '../mixins/regenerated/models/i-i-s-na-datu-стаж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтажMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
