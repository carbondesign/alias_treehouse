'use strict';
import routes from '../page.routes';
import talkbubble from '../../components/talkbubble/talkbubble.component';
import glassTransition from '../../components/glassTransition/glassTransition.directive';


export default angular.module('aliaApp.page1', [talkbubble, glassTransition])
	.component('page1', {
		template: require('./page_1.html'),
		selector: 'page1',
		transclude: true,
		replace: true,
        controller: function() {
            this.user = {
				name: 'test'
			}
        },
		bindings: {
		    user: '='
		}
	})
	.name
