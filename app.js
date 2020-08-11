var express = require("express");
var app = express();
var server = require("http").Server(app);
var http = require("http")

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/client/index.html");
})

app.use("/client", express.static(__dirname + "/client"));

server.listen(process.env.PORT || 2000);

var io = require("socket.io")(server,{});

var url1 = "/trigger/light_"
var url2 = "/with/key/cV-_rwjOet2Uk7jTdyvBSA"

io.on("connection", (s) => {
	s.on("lightAction", (d) => {
		var options = {
			host: "maker.ifttt.com",
			path: url1 + d + url2
		};

		http.request(options, () => {}).end()
	});

	s.on("cam", (d) => {
		if (d.name == "849734") io.emit(d.pic);
	});
});