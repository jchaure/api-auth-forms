var $ = require('jquery');

var ApiConfig = require('./config');
var ApiStrategies = require('./strategies');

var defaults = {
  baseURL: 'http://lowcost-env.patiknyyku.eu-west-1.elasticbeanstalk.com/'
};

var ApiAuth = function (options) {

  this.options = $.extend({}, defaults, options);

  this.config = new ApiConfig(this.options);
  this.strategies = new ApiStrategies(this.options);

}

module.exports = ApiAuth;
