require('ember-skeleton/models/event');

var attr = DS.attr;

App.Group = DS.Model.extend({

  events: DS.hasMany('App.Event'),
  past_events: function(){
    return Ember.ArrayController.create({
      content: this.get('events').filterProperty('status','past'),
      sortProperties: ['time'],
      sortAscending: false
    });
  }.property('events.@each'),
  upcoming_events: function(){
    return Ember.ArrayController.create({
      content: this.get('events').filterProperty('status','upcoming'),
      sortProperties: ['time'],
      sortAscending: true
    });
  }.property('events.@each'),
  next_event: function(){
    return Ember.ObjectController.create({
      content: this.get('upcoming_events.firstObject')
    });
  }.property('upcoming_events.@each'),

  urlname: attr('string'),
  description: attr('string'),
})

App.Group.sync = App.meetupSync('group');
