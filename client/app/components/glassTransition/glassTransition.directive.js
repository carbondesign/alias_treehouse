'use strict';
const angular = require('angular');

export default angular.module('aliaApp.glassTransition', [])
    .directive('glassTransition', function() {
        return {
            template: require('./glassTransition.html'),
            restrict: 'EA',
            replace: true,
            // selector: 'glasstransition',
            transclude: true,
            link: function(scope, element, attrs) {
            	console.log('here glasw')
            }
        };
    })
    .name;
