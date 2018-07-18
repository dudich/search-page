const express = require('express');
const proxy = require('express-http-proxy');
const http = require('http');
const querystring = require('querystring');
const request = require("request");

const PORT = 8081;
const DEFAULT_DEV_SERVER = 'api-demo.seekom.com';
let token = '';

const app = express();

app.set('host', 'localhost');
app.set('port', PORT);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
  next();
});

app.use('/setToken', (req, res) => {
  token = req.query.token;
  res.send('');
});

//app.use('/getToken', (req, res) => {
  //{"errors":[{"code":"406","title":"Not Acceptable"}]}
  // var options = { method: 'POST',
  //   url: 'https://api-demo.seekom.com/oauth/token',
  //   headers:
  //     { 'Postman-Token': '9756aaf2-25c9-4255-974c-ddf7072979ea',
  //       'Cache-Control': 'no-cache',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  //   formData:
  //     { client_id: '2b8f492621924e27',
  //       client_secret: 'LLXhdiBa89in11NbeYFEQUpwtiYLOgZ3wvOGVfV0p8gHdC5JZ+32sFt0zRzBS3VO',
  //       grant_type: 'authorization_code',
  //       code: req.query.code } };
  //
  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);
  //
  //   const jsonData = JSON.parse(body);
  //   res.json(jsonData);
  // });

  //{"errors":[{"code":"406","title":"Not Acceptable"}]}
  // var options = {
  //   "method": "POST",
  //   "hostname": 'api-demo.seekom.com',
  //   "path": "/oauth/token",
  //   "headers": {
  //     "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Cache-Control": "no-cache",
  //     "Postman-Token": "1d376f68-d9dd-44bf-8fe0-79d20adc0992"
  //   }
  // };
  //
  // var req = http.request(options, function (res) {
  //   var chunks = [];
  //
  //   res.on("data", function (chunk) {
  //     chunks.push(chunk);
  //   });
  //
  //   res.on("end", function () {
  //     var body = Buffer.concat(chunks);
  //     console.log(body.toString());
  //   });
  // });
  //
  // req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"client_id\"\r\n\r\n2b8f492621924e27\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"client_secret\"\r\n\r\nLLXhdiBa89in11NbeYFEQUpwtiYLOgZ3wvOGVfV0p8gHdC5JZ+32sFt0zRzBS3VO\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"grant_type\"\r\n\r\nauthorization_code\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"code\"\r\n\r\n1620775e45e1bbe118710bb1d4fe7dce\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
  // req.end();


  //Error: Error: got 406 response
  // var unirest = require("unirest");
  //
  // var req = unirest("POST", "https://api-demo.seekom.com/oauth/token");
  //
  // req.headers({
  //   "Postman-Token": "7edd660b-66c9-4adb-a42e-523921282cb5",
  //   "Cache-Control": "no-cache",
  //   "Content-Type": "application/x-www-form-urlencoded",
  //   "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
  // });
  //
  // req.multipart([
  //   {
  //     "body": "2b8f492621924e27"
  //   },
  //   {
  //     "body": "LLXhdiBa89in11NbeYFEQUpwtiYLOgZ3wvOGVfV0p8gHdC5JZ+32sFt0zRzBS3VO"
  //   },
  //   {
  //     "body": "authorization_code"
  //   },
  //   {
  //     "body": "1620775e45e1bbe118710bb1d4fe7dce"
  //   }
  // ]);
  //
  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);
  //
  //   console.log(res.body);
  // });

  //res.send('wrong');
//});

app.use('/', (req, res) => {
  const options = {
    host: DEFAULT_DEV_SERVER,
    path: req.originalUrl,
    PORT: 80,
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'cache-control': 'no-cache',
      'accept': '*/*',
      'connection': 'close',
      'Authorization': 'Bearer ' + req.headers.token
    }
  };

  const httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    let data = '';
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function() {
      const jsonData = JSON.parse(data);

      if (typeof data['errors'] !== 'undefined') {
        res.status(data['errors'][0]['code']);
      }

      res.json(jsonData);
    })
  });
  httpreq.end();
});

let server = app.listen(app.get('port'), app.get('host'), () => {});