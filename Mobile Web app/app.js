const port = 8080;
const hostname = '0.0.0.0';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  console.log('page requested : ' + req.url);
  //console.log(req);
  if(req.url === '/'){
    fs.readFile('public/index.html', function (err, data) {
      if(err){
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }else{
    fs.readFile('public' + req.url, function (err, data) {
      if(err){
        res.writeHead(404);
        //res.end(JSON.stringify(err));
        res.end('<head><title>404</title></head><h1>Error: 404 <br> page not found</h1> <br> <a href="/">Back to News Time homepage</a>');
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }
  
});


server.listen(port, hostname, () => {
  console.log('Server running at http://'+hostname+':'+port+'/');
  console.log('press CTRL + C to abort');
});

