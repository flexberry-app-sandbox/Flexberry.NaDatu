import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-na-datu-документ-l');
  this.route('i-i-s-na-datu-документ-e',
  { path: 'i-i-s-na-datu-документ-e/:id' });
  this.route('i-i-s-na-datu-документ-e.new',
  { path: 'i-i-s-na-datu-документ-e/new' });
  this.route('i-i-s-na-datu-ответственный-l');
  this.route('i-i-s-na-datu-ответственный-e',
  { path: 'i-i-s-na-datu-ответственный-e/:id' });
  this.route('i-i-s-na-datu-ответственный-e.new',
  { path: 'i-i-s-na-datu-ответственный-e/new' });
});

export default Router;
