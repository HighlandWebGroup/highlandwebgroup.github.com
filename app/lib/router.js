require('ember-skeleton/core');

App.Router.map(function() {
  this.resource('events');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('events');
  }
});

App.EventsRoute = Ember.Route.extend({
  model: function() {
    return App.Event.find({ group_urlname: "highland-web-group", status:"upcoming,past"});
  }
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(){
  }
})
