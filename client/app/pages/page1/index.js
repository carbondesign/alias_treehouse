'use strict';
import routes from '../page.routes';
import Page1Controller from './page1.controller'


export default angular.module('alikaApp.page_1', [])
    .controller('Page1Controller', Page1Controller)
    .name;

