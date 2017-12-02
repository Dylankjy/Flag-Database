var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var q = url.parse(req.url, true).query;
  var flag = "./flags/" + q.country + ".png"
  console.log("[Access Log]" + flag);

    fs.readFile(flag, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<head><title>Query Flags</title></head>");
        return res.end("<h1>Country Flags</h1><p><a style='font-size:24px' href='?country=____'><strong>Click</strong></a> to append a query string into the address bar<br>Edit the query in the address bar to your desired flag.</p><hr><p>The following flags are supported (type without spaces in low-caps for query):</p><ul><li>Australia</li><li>Great Britian</li><li>Indonasia</li><li>Japan</li><li>Malaysia</li><li>North Korea</li><li>Singapore</li><li>South Korea</li><li>United States</li><li>Vietnam</li></ul>")
      }

      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      return res.end();
    });
}).listen(8080);
console.log("Webserver Started.")
