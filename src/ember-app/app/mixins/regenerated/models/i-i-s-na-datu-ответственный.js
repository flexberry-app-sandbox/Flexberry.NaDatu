import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  фамилияИ: DS.attr('string'),
  стаж: DS.hasMany('i-i-s-na-datu-стаж', { inverse: 'ответственный', async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-na-datu-ответственный.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилияИ: {
    descriptionKey: 'models.i-i-s-na-datu-ответственный.validations.фамилияИ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стаж: {
    descriptionKey: 'models.i-i-s-na-datu-ответственный.validations.стаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтветственныйE', 'i-i-s-na-datu-ответственный', {
    фамилияИ: attr('Фамилия И', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    стаж: hasMany('i-i-s-na-datu-стаж', 'Стаж', {
      стаж: attr('Стаж', { index: 0 })
    })
  });

  modelClass.defineProjection('ОтветственныйL', 'i-i-s-na-datu-ответственный', {
    фамилияИ: attr('Фамилия И', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });
};
