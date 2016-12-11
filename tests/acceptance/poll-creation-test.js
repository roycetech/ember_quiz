import { test } from 'qunit';
import moduleForAcceptance from 'ember-quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | poll creation');

test('the poll form is displayed on the landing page', function(assert) {
  visit('/');

  andThen(function() {
    const question = findWithAssert('#question');
    const options = findWithAssert('.option');
    assert.equal(question.length, 1, 'It displays one question prompt');
    assert.equal(options.length, 3, 'It displays 3 option labels');
  });
});


test('submitting the poll takes you to the voting page', function(assert) {
  visit('/');
  fillIn('#question', 'This is a test question');
  fillIn('.option:eq(0)', 'Option 1 Text');
  fillIn('.option:eq(1)', 'Option 2 Text');
  fillIn('.option:eq(2)', 'Option 3 Text');
  click('.btn--form');

  andThen(function() {

    assert.equal(currentRouteName(), 'polls.poll.index', 'It goes to the voting page');
    assert.equal(findWithAssert('h3').text().trim(), 'This is a test question');

    assert.equal(findWithAssert('.list--answer li:eq(0) span').text().trim(),
      'Option 1 Text');

    assert.equal(findWithAssert('.list--answer li:eq(1) span').text().trim(),
      'Option 2 Text');

    assert.equal(findWithAssert('.list--answer li:eq(2) span').text().trim(),
      'Option 3 Text');

  });
});
