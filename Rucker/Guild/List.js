xmlhttp.open("GET","https://www.kookapp.cn/api/v3/guild/list")
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send()
var ner = xmlhttp.responseText;

function guild_list_id(){
	return ner.data.items[0];
}

function guild_list_name(){
	return ner.data.items[1];
}

function guild_list_topic(){
	return ner.data.items[2];
}

function guild_list_user_id(){
	return ner.data.items[3];
}

function guild_list_icon(){
	return ner.data.items[4];
}

function guild_list_notify_type(){
	return ner.data.items[5];
}

function guild_list_region(){
	return ner.data.items[6];
}

function guild_list_enable_open(){
	return ner.data.items[7];
}

function guild_list_open_id(){
	return ner.data.items[8];
}

function guild_list_default_channel_id(){
	return ner.data.items[9];
}

function guild_list_welcome_channel_id(){
	return ner.data.items[10];
}

function guild_list_boost_num(){
	return ner.data.items[11];
}

function guild_list_level(){
	return ner.data.items[12];
}
