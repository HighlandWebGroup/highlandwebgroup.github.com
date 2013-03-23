/**
 *
 *  You can only make find queries 
 *
 **/

App.meetupSync = function(type){
  sync = {
    base_url:"https://api.meetup.com/2",
    find: function(id, process){
      q = {};
      q[this.type+"_id"] = id;
      this._query(q).then(function(result){
        process(result.results.length > 0 ? result.results[0]  : []).load();
      });
    },
    query: function(query, process){
      this._query(query).then(function(result){
        process(result.results || []).load();
      });
    },
    _query: function(query){
      Ember.assert("Must specify type", this.type);
      return App.ajax(this.base_url+"/"+this.type+"s", "GET", {data: query});
    }
  }
  sync.type = type;
  return sync;
}

App.MeetupAdapter = DS.BasicAdapter.extend({
});

App.ajax = function(url, type, hash) {
  hash.url = url;
  hash.type = type;
  hash.dataType = 'jsonp';
  hash.contentType = 'application/json; charset=utf-8';
  hash.data = hash.data || {}
  hash.data.key = "596c42283236355f551a246256c62"
  if (hash.data && type !== 'GET') {
    hash.data = JSON.stringify(hash.data);
  }
  return jQuery.ajax(hash);
}


App.MeetupAdapter.registerTransform('object', {
  serialize: function(serialized) {
    return Em.isNone(serialized) ? {} : serialized;
  },
  deserialize: function(deserialized) {
    return Em.isNone(deserialized) ? {} : deserialized;
  }
});
