require('ember-skeleton/core');

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(){
    App.text = this.controllerFor('application');
  }
})
