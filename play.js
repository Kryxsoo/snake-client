const net = require("net");
const {connect} = require('./client')

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  const stdout = process.stdout;
  if (key === '\u0003'){
    process.exit();
  }
};





console.log("Connecting ...");
connect();