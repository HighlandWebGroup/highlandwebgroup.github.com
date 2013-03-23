require('ember-skeleton/models/photo');
require('ember-skeleton/models/rsvp');

var attr = DS.attr;

App.Event = DS.Model.extend({

  rsvps: DS.hasMany('App.Rsvp'),
  photos: DS.hasMany('App.Photo'),

  group: DS.belongsTo('App.Group'),

  status: attr('string'),
  name: attr('string'),
  time: attr('date'),
  description: attr('string'),
  how_to_find_us: attr('string'),
  venue: attr('object')
})

App.Event.sync = App.meetupSync('event');


