import Ember from 'ember';

export default Ember.Object.extend({
  toggleOption(option) {
    if (this.get('option') === option)  {
      this.set('option', null);
    } else {
      this.set('option', option);
    }
  },

});