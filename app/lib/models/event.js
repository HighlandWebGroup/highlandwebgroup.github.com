require('ember-skeleton/models/photo');

var attr = DS.attr;

App.Event = DS.Model.extend({

  rsvps: DS.hasMany('App.Rsvp'),
  photos: DS.hasMany('App.Poto'),

  status: attr('string'),
  name: attr('string'),
  time: attr('date'),
  description: attr('string'),
  how_to_find_us: attr('string'),
  venue: attr('object')
})

App.Event.sync = App.meetupSync('event');
App.Event.sync.findRsvps = function(event, name, process){}
App.Event.sync.findPhotos = function(event, name, process){}


