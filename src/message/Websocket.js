var json = {
	"compress":"0"
}
xmlhttp.open("GET","https://www.kookapp.cn/api/v3/gateway/index",true);
xmlhttp.send(json);
var url = xmlhttp.responseText; 

setTimeout(function () {
	var soc = new WebSocket("https://developer.kookapp.cn/"){
	    send(url.url);
	}
}, 300);
