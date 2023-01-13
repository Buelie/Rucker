xmlhttp.open("GET","https://www.kookapp.cn/api/v3/channel/view")
xmlhttp.send()
var ner = xmlhttp.responseText;

function id(){
	return ner.data[0];
}

function guild_id(){
	return ner.data[1];
}

function user_id(){
	return ner.data[2];
}

function parent_id(){
	return ner.data[3];
}

function name(){
	return ner.data[4];
}

function topic(){
	return ner.data[5];
}

function type(){
	return ner.data[6];
}

function level(){
	return ner.data[7];
}

function slow_mode(){
	return ner.data[8];
}

function limit_amount(){
	return ner.data[9];
}

function is_category(){
	return ner.data[10];
}

function server_url(){
	return ner.data[11];
}
