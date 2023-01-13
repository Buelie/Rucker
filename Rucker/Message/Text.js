import '../Test/Channel.js';

function send_text(text){
	var ner = {
		"type" : 1,
		"target_id" : id(),
		"content" : text,
	}
	
	xmlhttp.open("POST","https://www.kookapp.cn/api/v3/message/create");
	xmlhttp.send(ner);
}
