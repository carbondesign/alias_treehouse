'use strict';

describe('Controller: Page1Ctrl', function() {
	// load the controller's module
	beforeEach(module('alikaApp.page1'));

	var Page1Ctrl;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller) {
		Page1Ctrl = $controller('Page1Ctrl', {});
	}));

	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
