import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  стаж: DS.attr('number'),
  ответственный: DS.belongsTo('i-i-s-na-datu-ответственный', { inverse: 'стаж', async: false })
});

export let ValidationRules = {
  стаж: {
    descriptionKey: 'models.i-i-s-na-datu-стаж.validations.стаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-na-datu-стаж.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтажE', 'i-i-s-na-datu-стаж', {
    стаж: attr('Стаж', { index: 0 })
  });
};
