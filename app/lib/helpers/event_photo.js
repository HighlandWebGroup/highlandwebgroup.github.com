Ember.Handlebars.registerBoundHelper('event_photo', function(ev){
  var photos = this.get('controller.photos').filterProperty('photo_album.event_id',ev.get('id'));
  var html = "";
  photos.forEach(function(photo,index,enumerable){
    html = html + "<img src=\""+photo.get('photo_link')+"\">"
  });
  return html.htmlSafe();
});
