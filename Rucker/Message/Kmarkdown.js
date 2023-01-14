import '../index.js';

function send_kmarkdown(text){
	var ner = {
		"type" : 9,
		"target_id" : id(),
		"content" : text
	}
	
	xmlhttp.open("POST","https://www.kookapp.cn/api/v3/message/create");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(ner);
}
