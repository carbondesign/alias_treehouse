'use strict';

describe('Directive: fadeTransition', function() {
  // load the directive's module and view
  beforeEach(module('aliasTreehouseApp.fadeTransition'));
  beforeEach(module('app/components/fadeTransition/fadeTransition.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<fade-transition></fade-transition>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the fadeTransition directive');
  }));
});
