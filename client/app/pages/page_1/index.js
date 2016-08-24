'use strict';
import routes from '../page.routes';
import Page1Component from './page_1.controller';
import talkbubble from '../../components/talkbubble/talkbubble.component';

export default angular.module('aliaApp.page1', ['ui.router', 'talkbubble', talkbubble])
	.config(routes)
    .controller('Page1Component', Page1Component)
    .name;
