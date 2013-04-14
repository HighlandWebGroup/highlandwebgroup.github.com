require('ember-skeleton/core');
require('ember-skeleton/store');
require('ember-skeleton/models');
require('ember-skeleton/router');
require('ember-skeleton/controllers');
require('ember-skeleton/views');
require('ember-skeleton/helpers');

App.initialize();

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

App.shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
