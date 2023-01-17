import '../index.js';

function send_text(text){
	var ner = {
		"guild_id" : guild_id(),
		"target_id" : channel_user_id()
	}
	
	xmlhttp.open("POST","https://www.kookapp.cn/api/v3/guild/kickout");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(ner);
}
