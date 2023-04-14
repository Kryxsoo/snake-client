let connection;
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
}
const handleUserInput = (key) => {
  if (key === 'w') {
    intervalId = setInterval(function() {
      connection.write("Move: up");
    }, 100);
  }
  if (key === 'a') {
    intervalId = setInterval(function() {
      connection.write("Move: left");
    }, 100);
  }
  if (key === 's') {
    intervalId = setInterval(function() {
      connection.write("Move: down");
    }, 100);
  }
  if (key === 'd') {
    intervalId = setInterval(function() {
      connection.write("Move: right");
    }, 100);
  }
  if (key === 'e') {
      connection.write(say + "Hello!");
  }
};

module.exports = {setupInput};