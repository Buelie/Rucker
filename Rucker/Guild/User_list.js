xmlhttp.open("GET","https://www.kookapp.cn/api/v3/guild/user-list");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send();
var ner = xmlhttp.responseText;

function user_count(){
	return ner.data.user_count;
}

function online_count(){
	return ner.data.online_count;
}

function offline_count(){
	return ner.data.offline_count;
}

function items(){
	return ner.data.items;
}
