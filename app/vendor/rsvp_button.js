!function(){
  highland_web_group_id = "9gl2hb3gnh0adqs91ur8oe51q0"
  localhost_id = "o2i5pb9tdktj5vq8kj7em780dl";
  highlandwebgroup_github_id = "s80l4mvpc6ugvnefj0oshkspgv";

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
    js.src= "https://secure.meetup.com/script/217965377037627760507776/api/mu.btns.js?id="+web_id;
    fjs.parentNode.insertBefore(js,fjs);
  }
}();
//http://www.meetup.com/meetup_api/buttons/
//<a href="http://www.meetup.com/Highland-Web-Group/events/ghnjqyrgbvb/" data-event="ghnjqyrgbvb" class="mu-rsvp-btn">RSVP</a>
//<a {{bindAttr href="event_url" }} {{bindAttr data-event="id"}} class="mu-rsvp-btn">RSVP</a>
//
//call window.mu.rsvpBtns()
