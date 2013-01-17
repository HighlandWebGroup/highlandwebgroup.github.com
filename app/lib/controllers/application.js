require('ember-skeleton/core');
require('ember-skeleton/models/group');
require('ember-skeleton/models/event');

App.ApplicationController = Ember.Controller.extend({
  groups: App.Group.find({ group_urlname: "highland-web-group"}),
  groupsObserver: function(){
    this.set('highland_web_group',this.get('groups.firstObject'));
  }.observes('groups.@each'),
  highland_web_group: null,
  events: App.Event.find({ group_urlname: "highland-web-group", status:"upcoming,past"}),
  past_events: function(){
    return Ember.ArrayController.create({
      content: this.get('events').filterProperty('status','past'),
      sortProperties: ['time'],
      sortAscending: false
    });
  }.property('events.@each'),
  upcoming_events: function(){
    var ue =  this.get('events').filterProperty('status','upcoming');
    ue.set('sortProperties',['description']);
    return ue;
  }.property('events.@each'),
  photos: App.Photo.find({ group_urlname: "highland-web-group"}),
});


