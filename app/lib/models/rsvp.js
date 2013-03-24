var attr = DS.attr;

App.Rsvp = DS.Model.extend({

  //event: DS.belongsTo('App.Event'),

  comments: attr('string'),
  created: attr('date'),
  member: attr('object'),
  member_photo: attr('object'),
  response: attr('string'),

})

App.Rsvp.sync = App.meetupSync('rsvp');
App.Rsvp.sync.munge = function(json){
  if(json.rsvp_id && json.rsvp_id == -1){
    json.rsvp_id = "RecurringOrganizersRsvpId";
  }
}
