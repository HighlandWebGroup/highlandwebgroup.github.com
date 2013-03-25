/**
 *
 *  You can only make find queries 
 *
 **/

App.meetupSync = function(type){
  sync = {
    throttle_time: 0, //meetup api will suspend access if to many requests made at the same time
    munge: function(json){json},
    findHasManyQueryOptions: {},
    base_url:"https://api.meetup.com/2",
    find: function(id, process){
      q = {};
      q[this.type+"_id"] = id;
      _munge = this.munge;
      Ember.run.later(this, function(){
        this._query(q).then(function(result){
          process(result.results.length > 0 ? result.results[0]  : [])
            .munge(_munge)
            .load();
        });
      }, this.throttleNoise());
    },
    //if we are throttling requests put a bit of varition on throttle time
    //we might make a bunch of request while looping through associations
    //this will spread out the requests a bit.
    throttleNoise: function(){
      if(this.throttle_time == 0){
        return 0;
      }
      // +/- between 0-10%
      return this.throttle_time * ((Math.random()*2)-1) ;
    },
    query: function(query, process){
      _munge = this.munge;
      Ember.run.later(this, function(){
        this._query(query).then(function(result){
          process(result.results || [])
            .munge(_munge)
            .load();
        })
      }, this.throttleNoise());
    },
    findHasMany: function(record, options, processor){
      relationship_model = record.constructor.typeForRelationship(options.relationship)
      q = {};
      q[record.constructor.sync.type+"_id"] = record.id;
      relationship_model.sync.query($.extend({},q, this.findHasManyQueryOptions), processor)
    },
    _query: function(query){
      Ember.assert("Must specify type", this.type);

      return App.ajax(this.base_url+"/"+this.type+"s", "GET", {data: query});
    }
  }
  sync_copy = $.extend(true, {}, sync)
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

