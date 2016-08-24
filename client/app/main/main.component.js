import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

import comicPanel from '../components/comicPanel/comicPanel.component';
import codeEditor from '../components/codeeditor/codeeditor.component';
import talkbubble from '../components/talkbubble/talkbubble.component';
import glassTransition from '../components/glassTransition/glassTransition.directive';

export class MainController {

    /*@ngInject*/
    constructor($http, $scope, socket) {

    }


}

export default angular.module('aliaApp.main', [uiRouter, comicPanel, codeEditor, talkbubble, glassTransition])
    .config(routing)
    .component('main', {
        template: require('./main.html'),
        controller: MainController
    })
    .name;
