import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('option-tally', 'Integration | Component | option-tally', {
  integration: true
});

test('Properly displays with 0 votes', function(assert) {

  this.set('myOption', { voteCount: 0 });
  this.set('myPoll', { voteCount: 0 });

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '0 votes (0.00%)');
});


test('Properly displays with all votes on the options', function(assert) {

  this.set('myOption', { voteCount: 5 });
  this.set('myPoll', { voteCount: 5 });

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '5 votes (100.00%)');
});

test('Properly displays with partial votes on the options', function(assert) {

  this.set('myOption', { voteCount: 1 });
  this.set('myPoll', { voteCount: 3 });

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '1 votes (33.33%)');
});