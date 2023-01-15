import '../index.js';

function message_list(text){
	xmlhttp.open("GET","https://www.kookapp.cn/api/v3/message/list");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send();
	var ner = xmlhttp.responseText;
	return ner.data.items;
}
