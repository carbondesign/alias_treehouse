'use strict';
import routes from '../page.routes';
import Page2Controller from './page_2.controller';

export default angular.module('alikaApp.page_2', [])
    .controller('Page2Controller', Page2Controller)
    .name;

