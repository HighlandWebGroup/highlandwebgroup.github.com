var attr = DS.attr;

App.Photo = DS.Model.extend({

  caption: attr('string'),
  created: attr('date'),
  updated: attr('date'),
  highres_link: attr('string'),
  photo_id: attr('number'),
  photo_link: attr('string'),
  thumb_link: attr('string'),
  photo_album: attr('object')

})
