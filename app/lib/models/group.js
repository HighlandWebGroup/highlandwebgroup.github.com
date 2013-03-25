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
  past_four_events: function(){
    return this.get('past_events').slice(0,4);
  }.property('past_events.@each'),
  upcoming_events: function(){
    return Ember.ArrayController.create({
      content: this.get('events').filterProperty('status','upcoming'),
      sortProperties: ['time'],
      sortAscending: true
    });
  }.property('events.@each'),
  next_four_events: function(){
    return this.get('upcoming_events').slice(0,4);
  }.property('upcoming_events.@each'),
  next_event: function(){
    return Ember.ObjectController.create({
      content: this.get('upcoming_events.firstObject')
    });
  }.property('upcoming_events.@each'),

  urlname: attr('string'),
  description: attr('string'),
})

App.Group.sync = App.meetupSync('group');
App.Group.sync.findHasManyQueryOptions = {status: 'upcoming,past'};
