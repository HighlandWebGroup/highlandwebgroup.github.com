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
  upcoming_events: function(){
    return this.get('events').filterProperty('status','upcoming');
  }.property('events.@each')
});


