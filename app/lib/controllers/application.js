require('ember-skeleton/core');
require('ember-skeleton/models/group');

App.ApplicationController = Ember.Controller.extend();

App.groups = App.Group.find({ group_urlname: "highland-web-group"});

