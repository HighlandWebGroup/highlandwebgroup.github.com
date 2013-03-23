require('ember-skeleton/core');
require('ember-skeleton/MeetupAdapter');

App.store = DS.Store.create({
  revision: 12,
  adapter: "App.MeetupAdapter"
});



