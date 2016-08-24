'use strict';
const angular = require('angular');

export class talkbubbleComponent {
	/*@ngInject*/
	constructor() {
		console.log('here talk')
	}
}

export default angular.module('aliaApp.talkbubble', [])
  .directive('talkbubble', function() {
    return {
      template: require('./talkbubble.html'),
      restrict: 'E',
      selector: 'talkbubble',
      transclude: true,
      replace: true,
      controller: talkbubbleComponent
    };
  })
  .name;
