'use strict';
const angular = require('angular');

export class comicPanelComponent {
	/*@ngInject*/
	constructor() {
		console.log('here')
	}
}

export default angular.module('aliaApp.comicpanel', [])
	.component('comicpanel', {
		template: require('./comicPanel.html'),
		selector: 'comicpanel',
		transclude: true,
		// transclude: {
		// 	text: 'p'
		// },
		// inputs: ['paneltext'],
		// bindings: { paneltext: '<' },
		controller: comicPanelComponent
	})
	.name;
