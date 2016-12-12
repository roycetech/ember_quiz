import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  label: DS.attr('string'),

  // poll: DS.belongsTo('poll'),
  poll: DS.belongsTo('poll', { async: false }),  // It means we want to return actual objects instead of promises.

  // voteCount: Ember.computed('poll.votes.[].option', function() {
  voteCount: Ember.computed('poll.votes.@each.option', function() {
    return this.get('poll.votes').filterBy('option', this).length;
  })


});
