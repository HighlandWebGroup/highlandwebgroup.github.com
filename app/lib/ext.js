var get = Ember.get, fmt = Ember.String.fmt;

Ember.View.reopen({
  templateForName: function(name, type) {
    if (!name) { return; }

    var container = get(this, 'container');
    if (container) {
      template = container.lookup('template:' + name);
      if(template){
        return template
        }
    }

    var templates = get(this, 'templates'),
        template = get(templates, name);

    if (!template) {
      try {
        template = require(name);
      } catch (e) {
        throw new Ember.Error(fmt('%@ - Unable to find %@ "%@".', [this, type, name]));
      }
    }
    return template;

  }
});
