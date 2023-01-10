var json = {
	"compress":"0"
}
xmlhttp.open("GET","https://www.kookapp.cn/api/v3/gateway/index",true);
xmlhttp.send(json);
var url = xmlhttp.responseText; 
var pong = "";
var hello = "";

setTimeout(function () {
	var soc = new WebSocket(url.url){
	    send(pong);
	    send(hello);
	}
}, 300);
