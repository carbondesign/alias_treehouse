'use strict';
const angular = require('angular');

export default angular.module('aliasTreehouseApp.codeeditor', [])
    .component('codeeditor', {
        template: require('./codeeditor.html'),
        controller: function() {
            this.isCollapsed = true;
        },
        bindings: {
	        isCollapsed: '<'
	    }
    })
    .name;
