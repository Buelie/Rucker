xmlhttp.open("GET","https://www.kookapp.cn/api/v3/guild/view");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send();
var nr = xmlhttp.responseText;

function guild_id(){
	return nr.data.id;
}

function guild_name(){
	return nr.data.name;
}

function guild_topic(){
	return nr.data.topic;
}

function guild_user_id(){
	return nr.data.user_id;
}

function guild_icon(){
	return nr.data.icon;
}

function guild_notify_type(){
	return nr.data.notify_type;
}

function guild_region(){
	return nr.data.region;
}

function guild_enable_open(){
	return nr.data.enable_open;
}

function guild_open_id(){
	return nr.data.open_id;
}

function guild_default_channel_id(){
	return nr.data.default_channel_id;
}

function guild_welcome_channel_id(){
	return nr.data.welcome_channel_id;
}

function guild_roles(){
	return nr.data.roles;
}

function guild_channels(){
	return nr.data.channels;
}
