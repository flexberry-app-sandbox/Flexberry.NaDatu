import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.na-datu.caption'),
          title: i18n.t('forms.application.sitemap.na-datu.title'),
          children: [{
            link: 'i-i-s-na-datu-документ-l',
            caption: i18n.t('forms.application.sitemap.na-datu.i-i-s-na-datu-документ-l.caption'),
            title: i18n.t('forms.application.sitemap.na-datu.i-i-s-na-datu-документ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-na-datu-ответственный-l',
            caption: i18n.t('forms.application.sitemap.na-datu.i-i-s-na-datu-ответственный-l.caption'),
            title: i18n.t('forms.application.sitemap.na-datu.i-i-s-na-datu-ответственный-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})