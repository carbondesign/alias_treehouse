'use strict';

describe('Component: codeeditor', function() {
	// load the component's module
	beforeEach(module('aliaApp.codeeditor'));

	var codeeditorComponent;

	// Initialize the component and a mock scope
	beforeEach(inject(function($componentController) {
		codeeditorComponent = $componentController('codeeditor', {});
	}));

	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
