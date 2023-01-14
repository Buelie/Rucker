xmlhttp.open("GET","https://www.kookapp.cn/api/v3/channel/view")
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send()
var ner = xmlhttp.responseText;

function channel_id(){
	return ner.data.id;
}

function channel_guild_id(){
	return ner.data.guild_id;
}

function channel_user_id(){
	return ner.data.user_id;
}

function channel_parent_id(){
	return ner.data.parent_id;
}

function channel_name(){
	return ner.data.name;
}

function channel_topic(){
	return ner.data.topic;
}

function channel_type(){
	return ner.data.type;
}

function channel_level(){
	return ner.data.level;
}

function channel_slow_mode(){
	return ner.data.slow_mode;
}

function channel_limit_amount(){
	return ner.data.limit_amount;
}

function channel_is_category(){
	return ner.data.is_category;
}

function channel_server_url(){
	return ner.data.server_url;
}
