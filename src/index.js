var ApiAuthForm = require('./api-auth-form');
var ApiAuth = require('./api-auth');

function ApiAuthView (options) {
  var self = this;

  self.api = new ApiAuth(options);
  self.forms = [];

  self.api.strategies.get().then(function (strategies) {
    for (var i = 0, l = strategies.length; i < l; i++) {
      self.forms.push(new ApiAuthForm({
        $el: options.$el,
        strategy: strategies[i],
        form: options.form,
        fields: options.fields,
        submitButton: options.submitButton
      }, self.api));
    }
  });
}

module.exports = ApiAuthView;
