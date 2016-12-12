import DS from 'ember-data';

export default DS.Model.extend({
  option: DS.belongsTo('option', { async: false }),
  poll: DS.belongsTo('poll', { async: false }),

  toggleOption(option) {
    if (this.get('option') === option)  {
      this.set('option', null);
    } else {
      this.set('option', option);
    }
  }

});
