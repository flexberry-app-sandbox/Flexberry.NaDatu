import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISNa_datuДокументLForm from './forms/i-i-s-na-datu-документ-l';
import IISNa_datuОтветственныйLForm from './forms/i-i-s-na-datu-ответственный-l';
import IISNa_datuДокументEForm from './forms/i-i-s-na-datu-документ-e';
import IISNa_datuОтветственныйEForm from './forms/i-i-s-na-datu-ответственный-e';
import IISNa_datuДокументModel from './models/i-i-s-na-datu-документ';
import IISNa_datuОтветственныйModel from './models/i-i-s-na-datu-ответственный';
import IISNa_datuСтажModel from './models/i-i-s-na-datu-стаж';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-na-datu-документ': IISNa_datuДокументModel,
    'i-i-s-na-datu-ответственный': IISNa_datuОтветственныйModel,
    'i-i-s-na-datu-стаж': IISNa_datuСтажModel
  },

  'application-name': 'Na_datu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Na_datu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Na_datu',
          title: 'Na_datu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'na-datu': {
          caption: 'Na_datu',
          title: 'Na_datu',
          'i-i-s-na-datu-документ-l': {
            caption: 'Документ',
            title: ''
          },
          'i-i-s-na-datu-ответственный-l': {
            caption: 'Ответственный',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-na-datu-документ-l': IISNa_datuДокументLForm,
    'i-i-s-na-datu-ответственный-l': IISNa_datuОтветственныйLForm,
    'i-i-s-na-datu-документ-e': IISNa_datuДокументEForm,
    'i-i-s-na-datu-ответственный-e': IISNa_datuОтветственныйEForm
  },

});

export default translations;
