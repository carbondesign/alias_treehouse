'use strict';
import routes from '../page.routes';
import Page1Component from './page_1.controller';

export default angular.module('aliaApp.page1', ['ui.router'])
	.config(routes)
    .controller('Page1Component', Page1Component)
    .name;

