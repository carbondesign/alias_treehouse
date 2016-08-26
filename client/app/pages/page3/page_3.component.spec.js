'use strict';

describe('Component: Page3Component', function() {
	// load the controller's module
	beforeEach(module('aliaApp.page_3'));

	var Page3Component;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($componentController) {
		Page3Component = $componentController('page3', {});
	}));

	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
