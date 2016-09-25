'use strict';
const angular = require('angular');

export default angular.module('alikaApp.fadeTransition', [])
	.directive('fadeTransition', function() {
		return {
			template: require('./fadeTransition.html'),
			restrict: 'EA',
			replace: true,
			transclude: true,
			link: function(scope, element, attrs) {

			}
		};
	})
	.name;
