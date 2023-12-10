import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  тип: DS.attr('string'),
  фамилия: DS.attr('string'),
  ответственный: DS.belongsTo('i-i-s-na-datu-ответственный', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-na-datu-документ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-na-datu-документ.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-na-datu-документ.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-na-datu-документ.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументE', 'i-i-s-na-datu-документ', {
    дата: attr('Дата', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    ответственный: belongsTo('i-i-s-na-datu-ответственный', 'Ответственный', {
      фамилияИ: attr('Фамилия И', { index: 4, hidden: true }),
      должность: attr('', { index: 5 })
    }, { index: 3, displayMemberPath: 'фамилияИ' })
  });

  modelClass.defineProjection('ДокументL', 'i-i-s-na-datu-документ', {
    дата: attr('Дата', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    ответственный: belongsTo('i-i-s-na-datu-ответственный', 'Фамилия И', {
      фамилияИ: attr('Фамилия И', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
