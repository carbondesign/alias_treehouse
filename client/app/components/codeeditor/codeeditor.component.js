'use strict';
const angular = require('angular');

export class codeeditorComponent {
  /*@ngInject*/
  constructor() {
  	this.isCollapsed = true;
  }
}

export default angular.module('aliasTreehouseApp.codeeditor', [])
  .component('codeeditor', {
    template: require('./codeeditor.html'),
    // bindings: { message: '<' },
    controller: codeeditorComponent,
    selector: 'codeeditor'
  })
  .name;
