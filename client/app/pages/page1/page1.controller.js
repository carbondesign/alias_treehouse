'use strict';

export default class Page1Controller {

    /*@ngInject*/
    constructor() {
        this.user = {
            name: null
        }
        this.show = {
            userName: true,
            afterMilk: true,
            afterSandwich: true
        }
        this.html = '<html></html>'



    }
    meow() {
        console.log('click')
        this.user.name = "meow";
        this.show.userName = !this.show.userName;
        return
    }
    clickMilk() {
        this.show.afterMilk = !this.show.afterMilk;
    }
    clickSandwich() {
        this.show.afterSandwich = !this.show.afterSandwich;
    }
    imageSource() {
        var imageArray = [];

        for (var i = 1; i < 9; i++) {
            imageArray.push("../../../assets/images/milk" + i + ".png");
        }

        return imageArray
    }
    sandwichSource() {
        var imageArray = [];

        for (var i = 1; i < 5; i++) {
            imageArray.push("../../../assets/images/sandwich" + i + ".svg");
        }

        return imageArray
    }
}
