/*global helloBackbone, Backbone, JST*/

helloBackbone.Views = helloBackbone.Views || {};

(function () {
    'use strict';

    helloBackbone.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs']

    });

})();
