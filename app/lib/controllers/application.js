require('ember-skeleton/core');
require('ember-skeleton/models/group');
require('ember-skeleton/models/event');

App.ApplicationController = Ember.Controller.extend({


  // not really the best location for these but where else? 
  groups: App.Group.find({ group_urlname: "highland-web-group"}),
  photos: App.Photo.find({ group_urlname: "highland-web-group"}),
  // TODO move above

  past_events: function(){
    return Ember.ArrayController.create({
      content: this.get('content').filterProperty('status','past'),
      sortProperties: ['time'],
      sortAscending: false
    });
  }.property('content.@each'),
  upcoming_events: function(){
    return Ember.ArrayController.create({
      content: this.get('content').filterProperty('status','upcoming'),
      sortProperties: ['time'],
      sortAscending: true
    });
  }.property('content.@each'),
  next_event: function(){
    return Ember.ObjectController.create({
      content: this.get('upcoming_events.firstObject')
    });
  }.property('upcoming_events')



});


