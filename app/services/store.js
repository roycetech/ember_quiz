import Ember from 'ember';

import Poll from 'ember-quiz/models/poll';
import Option from 'ember-quiz/models/option';
import Vote from 'ember-quiz/models/vote';

const polls = [];

// Create Poll 1
let poll1 = Poll.create({
  id: '1',
  options: [],
  prompt: 'Which of the following is NOT part of the Woodland Wanderer Way?',
  votes: []
});

poll1.get('options').pushObjects([
  Option.create({id: '1', label: 'Honesty', poll: poll1}),
  Option.create({id: '2', label: 'Integrity', poll: poll1}),
  Option.create({id: '3', label: 'Impatience', poll: poll1}),
]);
polls.push(poll1);

// Create Poll 2
let poll2 = Poll.create({
  id: '2',
  options: [],
  prompt: 'Which poisonous plant are you?',
  votes: []
});

poll2.get('options').pushObjects([
  Option.create({id: '4', label: 'Nightshade', poll: poll2}),
  Option.create({id: '5', label: 'Hemlock', poll: poll2}),
  Option.create({id: '6', label: 'Rhubarb', poll: poll2}),
]);
polls.push(poll2);


export default Ember.Service.extend({
  createPoll() {
    const poll = Poll.create({
      options: [],
      votes: []
    });

    poll.get('options').pushObjects([
      Option.create({poll: poll}),
      Option.create({poll: poll}),
      Option.create({poll: poll})
    ]);

    return poll;
  },
  createVote(poll) {
    return Vote.create({poll: poll});
  },
  findAllPolls() {
    return polls;
  },
  findPoll(id) {
    return this.findAllPolls().findBy('id', id);
  },

  saveVote(vote) {
    const poll = vote.get('poll');
    poll.get('votes').pushObject(vote);
  },

  savePoll(poll) {
    polls.pushObject(poll);
    poll.set('id', polls.length);
  }

});
