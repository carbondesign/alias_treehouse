'use strict';

export default class Page1Component {
    /*@ngInject*/
    constructor($scope, $stateParams) {
        this.message = 'Hello';
        console.log($stateParams)
    }
}
