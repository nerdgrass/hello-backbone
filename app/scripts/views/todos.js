/*global helloBackbone, Backbone, JST*/

helloBackbone.Views = helloBackbone.Views || {};

(function () {
    'use strict';

    helloBackbone.Views.TodosView = Backbone.View.extend({

        template: JST['app/scripts/templates/todos.ejs']

    });

})();
