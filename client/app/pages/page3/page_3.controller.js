'use strict';

export default class Page3Component {
    /*@ngInject*/
    constructor() {
        this.message = 'Hello';
        console.log($stateParams)
    }
}
