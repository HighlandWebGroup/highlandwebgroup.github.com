var attr = DS.attr;

App.Event = DS.Model.extend({

  rsvps: DS.hasMany('App.Rsvp'),
  photos: DS.hasMany('App.Photo'),

  group: DS.belongsTo('App.Group'),

  attending_rsvps: function(){
    return Ember.ArrayController.create({
      content: this.get('rsvps').filterProperty('response','yes')
    });
  }.property('rsvps.@each'),

  event_url: attr('string'),
  status: attr('string'),
  name: attr('string'),
  time: attr('date'),
  description: attr('string'),
  how_to_find_us: attr('string'),
  venue: attr('object')
})

App.Event.sync = App.meetupSync('event');
App.Event.sync.munge = function(json){
  if(json.group && json.group.id){
    json.group_id = json.group.id;
    json.group = null;
  }
}

