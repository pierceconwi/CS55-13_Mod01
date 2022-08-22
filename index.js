// test comment -pierce

// define variable to hold http package (shared code) from node.js
let myhttp = require("http");

// use dot notation in js to access object and its method / props
//createServer() takes arguments to provide useful http server
// 1. function that runs whenever server receives an http request from browser
let myServer = myhttp.createServer(
  // createServer() uses function to run when a request comes in
  function( myrequest, myresponse) {
    console.log( myrequest.url );

  let mytext;
  if ( myrequest.url === "/hey" ) {
    mytext = "Hello there...";
  } else {
    mytext = "I don't know who you are!";
  }

  mytext = mytext + " - Please help.";
    
    // creates an http response header, including status code ("200 ok") and the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );
    // end() returns some data and closes the repsonse (sends it)
    myresponse.end( mytext + "\n" );
  }
);

// ask http to start listening on a tcp port for incoming http requests
// listen() takes 2 arguments:
// 1. tcp port #, string of the ip address to listen (0.0.0.0)
myServer.listen(8080, "0.0.0.0");

console.log("server has started");