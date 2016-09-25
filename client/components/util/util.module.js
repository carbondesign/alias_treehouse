'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('alikaApp.util', [])
  .factory('Util', UtilService)
  .name;
