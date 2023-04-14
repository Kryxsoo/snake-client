let connection;
const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require("./constants");
const say = ("Say: ");

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
};
let intervalId;
const handleUserInput = (key) => {
  const interval = (key) => {
    intervalId = setInterval(function() {
      connection.write(key);
    }, 100);
  };
  if (key === 'w') {
    clearInterval(intervalId);
    interval(UPKEY);
  }

  if (key === 'a') {
    clearInterval(intervalId);
    interval(LEFTKEY);
  }
  if (key === 's') {
    clearInterval(intervalId);
    interval(DOWNKEY);
  }
  if (key === 'd') {
    clearInterval(intervalId);
    interval(RIGHTKEY);
  }
  if (key === 'e') {
    connection.write(say + " Hello!");
  }
};

module.exports = {setupInput};