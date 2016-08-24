'use strict';

describe('Component: Page1Component', function() {
	// load the controller's module
	beforeEach(module('aliaApp.page_1'));

	var Page1Component;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($componentController) {
		Page1Component = $componentController('page1', {});
	}));

	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
