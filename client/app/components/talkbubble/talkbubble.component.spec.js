'use strict';

describe('Directive: talkbubble', function() {
  // load the directive's module and view
  beforeEach(module('aliasTreehouseApp.talkbubble'));
  beforeEach(module('app/components/talkbubble/talkbubble.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<talkbubble></talkbubble>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the talkbubble directive');
  }));
});
