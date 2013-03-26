require('ember-skeleton/core');
require('ember-skeleton/models/group');
require('ember-skeleton/models/event');

App.ApplicationController = Ember.Controller.extend({

  group: App.Group.find(1744559),

  init: function(){
    this._super();
    //this.reloadGroup();
  },

  reloadGroup: function(){
    Ember.run.later(this, function(){
      group = this.get('group');
      if(group){
        next_event = group.get('next_event');
        if(next_event){
          next_event.store.defaultTransaction.rollback();
          next_event.reload(); //not updating UI correctly
        }
      }
      this.reloadGroup()
    },
    5000);
  },
  nextEventObserver: function(){
    //Run later because template might not be updated with bound attributes
    //Must be event we can observe for this?
    Ember.run.later(null, function(){window.mu.rsvpBtns()},1000);
  }.observes('group.next_event'),

});
