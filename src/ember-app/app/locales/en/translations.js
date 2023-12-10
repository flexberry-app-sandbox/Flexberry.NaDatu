import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Na_datu',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Na_datu',
          title: 'Na_datu'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-na-datu-документ-l': IISNa_datuДокументLForm,
    'i-i-s-na-datu-ответственный-l': IISNa_datuОтветственныйLForm,
    'i-i-s-na-datu-документ-e': IISNa_datuДокументEForm,
    'i-i-s-na-datu-ответственный-e': IISNa_datuОтветственныйEForm
  },

});

export default translations;
