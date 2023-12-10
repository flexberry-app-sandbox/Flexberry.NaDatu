import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-na-datu-ответственный', 'Unit | Model | i-i-s-na-datu-ответственный', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-na-datu-документ',
    'model:i-i-s-na-datu-ответственный',
    'model:i-i-s-na-datu-стаж',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
