/*global helloBackbone, Backbone*/

helloBackbone.Collections = helloBackbone.Collections || {};

(function () {
    'use strict';

    helloBackbone.Collections.TodosCollection = Backbone.Collection.extend({

        model: helloBackbone.Models.TodosModel

    });

})();
