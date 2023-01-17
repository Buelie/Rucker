import '../index.js';

function send_text(text){
	var ner = {
		"guild_id" : guild_id(),
		"nickname" : text
	}
	
	xmlhttp.open("POST","https://www.kookapp.cn/api/v3/guild/nickname");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(ner);
}
