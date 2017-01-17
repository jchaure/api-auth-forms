'use strict';

var $ = require('jquery');

var ApiAuthView = require('../../dist/api-auth-forms');

new ApiAuthView({
  $el: $('#api-auth-form'),
  baseUrl: 'http://lowcost-env.patiknyyku.eu-west-1.elasticbeanstalk.com',
  customerId: 'patata'
});
