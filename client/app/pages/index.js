'use strict';

import angular from 'angular';

import uiRouter from 'angular-ui-router';

import routing from './page.routes';
import page1 from './page1';
import page2 from './page2';
import page3 from './page3';

export default angular.module('alikaApp.pages', [uiRouter, page1, page2, page3])
    .config(routing)
    .run(function() {
        // 'ngInject';
    })
    .name;
