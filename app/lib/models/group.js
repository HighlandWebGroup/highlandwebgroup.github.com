var attr = DS.attr;

App.Group = DS.Model.extend({
  urlname: attr('string'),
  description: attr('string'),
  didLoad: function(){
    console.log('model loaded');
  }
});
