
import { eq } from 'ember-quiz/helpers/eq';
import { module, test } from 'qunit';

module('Unit | Helper | eq');

test('returns truthy with equivalent items', function(assert) {
  assert.ok(eq(['string', 'string']), 'It works with strings');
  assert.ok(eq([1, 1]), 'It works with numbers');
  assert.ok(eq([0, 0]), 'It works with zeroes');
  assert.ok(eq([null, null]), 'It works with nulls');
});

test('returns falsy with inequivalent items', function(assert) {
  assert.notOk(eq(['string', 'different string']), 'It works with strings');
  assert.notOk(eq([1, 0]), 'It works with numbers');
  assert.notOk(eq([null, undefined]), 'It works with nulls');
});
