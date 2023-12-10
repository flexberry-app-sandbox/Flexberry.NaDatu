import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтветственныйMixin
} from '../mixins/regenerated/models/i-i-s-na-datu-ответственный';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтветственныйMixin, Validations, {
});

defineProjections(Model);

export default Model;
