require('ember-skeleton/core');

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(){
    this.controllerFor('application').set('model', App.Event.find({ group_urlname: "highland-web-group", status:"upcoming,past"}));
  }
})
