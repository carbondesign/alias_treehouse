'use strict';

describe('Component: comicPanel', function() {
	// load the component's module
	beforeEach(module('aliaApp.comicPanel'));

	var comicPanelComponent;

	// Initialize the component and a mock scope
	beforeEach(inject(function($componentController) {
		comicPanelComponent = $componentController('comicPanel', {});
	}));

	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
