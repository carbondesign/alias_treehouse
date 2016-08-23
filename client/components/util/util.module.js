'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('aliaApp.util', [])
  .factory('Util', UtilService)
  .name;
