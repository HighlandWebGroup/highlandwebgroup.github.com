require('ember-skeleton/core');
require('ember-skeleton/models/group');
require('ember-skeleton/models/event');

App.ApplicationController = Ember.Controller.extend({

  group: App.Group.find(1744559)

});
