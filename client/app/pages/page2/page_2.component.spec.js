'use strict';

describe('Component: Page2Component', function() {
	// load the controller's module
	beforeEach(module('aliaApp.page_2'));

	var Page2Component;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($componentController) {
		Page2Component = $componentController('page2', {});
	}));

	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
