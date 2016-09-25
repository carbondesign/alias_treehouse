import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

import comicPanel from '../components/comicPanel/comicPanel.component';
import codeEditor from '../components/codeeditor/codeeditor.component';
import talkbubble from '../components/talkbubble/talkbubble.component';
import cloud from '../components/cloud/cloud.component';
import fadeTransition from '../components/fadeTransition/fadeTransition.directive';
import sequentialTransition from '../components/sequentialTransition/sequentialTransition.directive';
import ngAnimate from 'angular-animate';

export class MainController {


}

export default angular.module('alikaApp.main', [uiRouter, ngAnimate, comicPanel, codeEditor, talkbubble, sequentialTransition, fadeTransition, cloud])
    .config(routing)
    .component('main', {
        template: require('./main.html'),
        controller: MainController
    })
    .name;
