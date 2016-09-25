'use strict';

import LoginController from './login.controller';

export default angular.module('alikaApp.login', [])
  .controller('LoginController', LoginController)
  .name;
