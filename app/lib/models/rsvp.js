var attr = DS.attr;

App.Rsvp = DS.Model.extend({

  //event: DS.belongsTo('App.Event'),
  memberLink: function(){
    return "http://www.meetup.com/members/"+this.get('member.member_id');
  }.property('member'),
  comments: attr('string'),
  created: attr('date'),
  member: attr('object'),
  member_photo: attr('object'),
  response: attr('string'),

})

App.Rsvp.sync = App.meetupSync('rsvp');
App.Rsvp.sync.munge = function(json){
  if(json.rsvp_id && json.rsvp_id == -1){
    //ember-data wont accept -1 id
    json.id = "RecurringOrganizersRsvpId";
  }else{
    json.id = json.rsvp_id;
  }

  return json;
}
