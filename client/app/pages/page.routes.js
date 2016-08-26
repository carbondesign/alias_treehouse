

/*@ngInject*/
export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('page1', {
            url: '/page_1',
            template: require('./page1/page_1.html'),
            controller: 'Page1Controller',
      		controllerAs: 'pg1'
        })
        .state('page2', {
            url: '/page_2',
            template: require('./page2/page_2.html'),
            controller: 'Page2Controller',
      		controllerAs: 'pg2'
        })
        .state('page3', {
            url: '/page_3',
            template: require('./page3/page_3.html'),
            controller: 'Page3Controller',
      		controllerAs: 'pg3'
        })


}
