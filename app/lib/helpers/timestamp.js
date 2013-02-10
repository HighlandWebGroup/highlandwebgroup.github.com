Ember.Handlebars.registerBoundHelper('timestamp', function(date, options) {
  var formatter        = options.hash['format'] ? options.hash['format'] : 'hh:mm a MM-DD-YYYY';
  var parsed_date      = moment(date);
  var formatted_date   = parsed_date.format(formatter);
  return new Handlebars.SafeString("<time datetime=" + date +">" + formatted_date + "</time>");
});
