!function(){
  highland_web_group_id = "ub5hv747qhk13g1r4i1mdv6pij"
  localhost_id = "nak74qv2qlg4s63rdh0lmag1q5";
  highlandwebgroup_github_id = "v9hk1pk5qav305eivo2fjd3od5";

  web_id = highland_web_group_id;
  if(~document.location.hostname.indexOf('github')){
    web_id = highlandwebgroup_github_id;
  }else if(~document.location.hostname.indexOf('localhost')){
    web_id = localhost_id;
  }

  d = document;
  s = "script";
  id = "mu-bootjs"

  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s); 
    js.id=id;js.async=true;
    js.src= "https://secure.meetup.com/890357987448484755600/script/api/mu.btns.js?id="+web_id;
    fjs.parentNode.insertBefore(js,fjs);
  }
}();
//http://www.meetup.com/meetup_api/buttons/
//<a href="http://www.meetup.com/Highland-Web-Group/events/ghnjqyrgbvb/" data-event="ghnjqyrgbvb" class="mu-rsvp-btn">RSVP</a>
//<a {{bindAttr href="event_url" }} {{bindAttr data-event="id"}} class="mu-rsvp-btn">RSVP</a>
//
//call window.mu.rsvpBtns()
