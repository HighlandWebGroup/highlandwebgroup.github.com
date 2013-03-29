/**
 *
 *  You can only make find queries 
 *
 **/

App.meetupSync = function(type){
  sync = {
    munge: function(json){json},
    findHasManyQueryOptions: {},
    base_url:"https://api.meetup.com/2",
    find: function(id, process){
      q = {};
      q[this.type+"_id"] = id;
      _munge = this.munge;
      this._query(q, function(result){
        process(result.results.length > 0 ? result.results[0]  : [])
          .munge(_munge)
          .load();
      });
    },
    query: function(query, process){
      _munge = this.munge;
      this._query(query, function(result){
        process(result.results || [])
          .munge(_munge)
          .load();
      })
    },
    findHasMany: function(record, options, processor){
      relationship_model = record.constructor.typeForRelationship(options.relationship)
      q = {};
      q[record.constructor.sync.type+"_id"] = record.id;
      relationship_model.sync.query(Ember.$.extend({},q, this.findHasManyQueryOptions), processor)
    },
    _query: _.rateLimit(function(query, processResult){
      Ember.assert("Must specify type", this.type);
      App.ajax(this.base_url+"/"+this.type+"s", "GET", {data: query}).then(processResult);
    }, 100),
  }
  sync_copy = Ember.$.extend(true, {}, sync)
  sync_copy.type = type;
  return sync_copy;
}

App.MeetupAdapter = DS.BasicAdapter.extend({
});

App.ajax = function(url, type, hash) {
  hash.url = url;
  hash.type = type;
  hash.dataType = 'jsonp';
  hash.contentType = 'application/json; charset=utf-8';
  hash.data = hash.data || {}
  hash.data.key = "d6c68784a7667776f6c4b2c6d525131"
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

