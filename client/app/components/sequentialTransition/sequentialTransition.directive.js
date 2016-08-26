'use strict';
const angular = require('angular');

export default angular.module('aliaApp.sequentialTransition', [])
    .directive('sequentialTransition', function() {
        return {
            template: require('./sequentialTransition.html'),
            restrict: 'EA',
            replace: true,
            transclude: true,
            link: function(scope, element, attrs) {

            }
        };
    })
    .name;
