'use strict';

export default class Page1Controller {

    /*@ngInject*/
    constructor() {
        this.user = {
            name: null
        }
        this.show = {
        	userName : true,
        	afterMilk : false,
        	afterSandwich : false
        }

    }
    meow () {
        console.log('click')
        this.user.name = "meow";
        this.show.userName = false;
        return
    }
    clickMilk(){
    	console.log("milk");
    	this.show.afterMilk = true;
    }
}
