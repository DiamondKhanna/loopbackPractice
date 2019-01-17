module.exports = function(Message) {
  Message.greet = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, 'Sender says ' + msg + ' to receiver');
    });
  };

  // Message.app.models.login.login('john','doe');
  console.log(Message);
};
