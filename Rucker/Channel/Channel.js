xmlhttp.open("GET","https://www.kookapp.cn/api/v3/channel/view")
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send()
var ner = xmlhttp.responseText;

function channel_id(){
	return ner.data[0];
}

function channel_guild_id(){
	return ner.data[1];
}

function channel_user_id(){
	return ner.data[2];
}

function channel_parent_id(){
	return ner.data[3];
}

function channel_name(){
	return ner.data[4];
}

function channel_topic(){
	return ner.data[5];
}

function channel_type(){
	return ner.data[6];
}

function channel_level(){
	return ner.data[7];
}

function channel_slow_mode(){
	return ner.data[8];
}

function channel_limit_amount(){
	return ner.data[9];
}

function channel_is_category(){
	return ner.data[10];
}

function channel_server_url(){
	return ner.data[11];
}
