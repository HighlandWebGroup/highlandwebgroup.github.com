var attr = DS.attr;

App.Rsvp = DS.Model.extend({
  comments: attr('string'),
  created: attr('date'),
  member: attr('object'),
  member_photo: attr('object'),
  response: attr('string')
})
