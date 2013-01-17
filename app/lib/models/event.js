var attr = DS.attr;

App.Event = DS.Model.extend({

  status: attr('string'),
  name: attr('string'),
  time: attr('date'),
  description: attr('string'),
  how_to_find_us: attr('string')

})
