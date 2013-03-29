var attr = DS.attr;

App.Photo = DS.Model.extend({

  event: DS.belongsTo('App.Event'),
  group: DS.belongsTo('App.Group'),

  caption: attr('string'),
  created: attr('date'),
  updated: attr('date'),
  highres_link: attr('string'),
  photo_id: attr('number'),
  photo_link: attr('string'),
  thumb_link: attr('string'),
  photo_album: attr('object')
})

App.Photo.sync = App.meetupSync('photo');
App.Photo.sync.munge = function(json){
  if(json.photo_album){
    json.event_id = json.photo_album.event_id;
    json.group_id = json.photo_album.group_id;
    //json.photo_album.photo_album_id;
  }
}
