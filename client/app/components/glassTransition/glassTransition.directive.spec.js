'use strict';

describe('Directive: glassTransition', function() {
  // load the directive's module and view
  beforeEach(module('aliasTreehouseApp.glassTransition'));
  beforeEach(module('app/components/glassTransition/glassTransition.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<glass-transition></glass-transition>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the glassTransition directive');
  }));
});
