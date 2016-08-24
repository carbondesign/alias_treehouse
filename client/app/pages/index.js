'use strict';

import angular from 'angular';

import uiRouter from 'angular-ui-router';

import routing from './page.routes';
import page1 from './page_1/';

export default angular.module('aliaApp.page1', [uiRouter, page1])
    .config(routing)
    .run(function() {
        'ngInject';

    })
    .name;
