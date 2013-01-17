/**
 *
 *  You can only make find queries 
 *
 **/

App.MeetupAdapter = DS.RESTAdapter.extend({
  url:"https://api.meetup.com/2",
  ajax: function(url, type, hash) {
    hash.url = url;
    hash.type = type;
    hash.dataType = 'jsonp';
    hash.contentType = 'application/json; charset=utf-8';
    hash.context = this;
    hash.data = hash.data || {}
    hash.data.key = "596c42283236355f551a246256c62"
    if (hash.data && type !== 'GET') {
      hash.data = JSON.stringify(hash.data);
    }

    var old_s = hash.success;
    hash.success = function(data){
      result_type = url.substr(url.lastIndexOf('/') + 1);
      var json = {}
      json[result_type] = data.results;
      old_s.call(this,json);
    }

    jQuery.ajax(hash);
  },
})
