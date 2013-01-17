require('ember-skeleton/core');
require('ember-skeleton/MeetupAdapter');

App.store = DS.Store.create({
  revision: 11,
  adapter: "App.MeetupAdapter"
});



