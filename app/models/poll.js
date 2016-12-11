import Ember from 'ember';

export default Ember.Object.extend({
  optionsSorting: ['voteCount:desc', 'label:asc'],
  sortedOptions: Ember.computed.sort('options', 'optionsSorting'),
  voteCount: Ember.computed.alias('votes.length')
});