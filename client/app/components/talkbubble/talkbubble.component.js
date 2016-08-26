'use strict';
const angular = require('angular');

export class talkbubbleComponent {
    /*@ngInject*/
}

export default angular.module('aliaApp.talkbubble', [])
    .directive('talkbubble', function() {
        return {
            template: require('./talkbubble.html'),
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
			    user: '=',
			    width: '=',
			    height: '=',
			    top: '=',
			    left: '=',
			    tail: '=',
			    zindex: '@'
			}
        };
    })
    .name;
