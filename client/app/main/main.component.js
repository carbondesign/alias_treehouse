import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

import comicPanel from '../components/comicPanel/comicPanel.component';
import codeEditor from '../components/codeeditor/codeeditor.component';
import talkbubble from '../components/talkbubble/talkbubble.component';
import fadeTransition from '../components/fadeTransition/fadeTransition.directive';

export class MainController {


}

export default angular.module('aliaApp.main', [uiRouter, comicPanel, codeEditor, talkbubble, fadeTransition])
    .config(routing)
    .component('main', {
        template: require('./main.html'),
        controller: MainController
    })
    .name;
