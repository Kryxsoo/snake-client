const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: xxx")
  });

  conn.on('connect', () => {
    setInterval( func = () => {
      conn.write("Move: up");
    }, 500);
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('end', () => {
    console.log('disconnected from server');
    // interpret incoming data as text
    conn.setEncoding("utf8");
  });
    return conn;
};

module.exports  = {
  connect,
};