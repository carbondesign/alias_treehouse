'use strict';
const angular = require('angular');

export class comicPanelComponent {
	/*@ngInject*/
	constructor() {
		console.log('here')
	}
}

export default angular.module('alikaApp.comicpanel', [])
	.component('comicpanel', {
		template: require('./comicPanel.html'),
		selector: 'comicpanel',
		transclude: true,
		replace: true,
		controller: comicPanelComponent,
		bindings: {
			backgrounds: '='
		}

	})
	.name;
