import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';


moduleForModel('vote', 'Unit | Model | vote', {
  needs: ['model:option', 'model:poll']
});

test('', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
