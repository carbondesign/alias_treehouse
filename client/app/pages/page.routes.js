'use strict';

/*@ngInject*/
export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('page1', {
            url: '/page_1',
            template: require('./page_1/page_1.html')
        })
        .state('page2', {
            url: '/page_2',
            template: require('./page_2/page_2.html')
        })
        .state('page3', {
            url: '/page_3',
            template: require('./page_3/page_3.html')
        })


}
