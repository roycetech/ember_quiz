import { test } from 'qunit';
import moduleForAcceptance from 'ember-quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | voting on a poll');

test('all options are displayed unselected', function(assert) {
  visit('/polls/1');

  andThen(function() {
    assert.notOk(findWithAssert('.list--answer button:eq(0)').is('.is-selected'), 'Button 1 is not selected');
    assert.notOk(findWithAssert('.list--answer button:eq(1)').is('.is-selected'), 'Button 2 is not selected');
    assert.notOk(findWithAssert('.list--answer button:eq(2)').is('.is-selected'), 'Button 3 is not selected');
  });
});

test('a button toggles selection', function(assert) {
  const buttonSelector = '.list--answer button:eq(0)';
  visit('/polls/1');

  click(buttonSelector);

  andThen(function() {
    assert.ok(findWithAssert(buttonSelector).is('.is-selected'), 'Button 1 is selected after click');
  });


  click(buttonSelector);

  andThen(function() {
    assert.notOk(findWithAssert(buttonSelector).is('.is-selected'), 'Button 1 is deselected after clicking again');
  });
});


test('casting a vote', function(assert) {
  visit('/polls/1');
  click('.list--answer button:eq(0)');
  click('.btn--vote');

  andThen(function() {
    assert.equal(currentURL(), '/polls/1/results', 'It transitions to the results page');
    assert.equal(findWithAssert('.list--answer li:eq(0)').text().trim(), 'Honesty');
    assert.equal(findWithAssert('.progress-info:eq(0)').text().trim(), '1 votes (100.00%)');
  });
});
