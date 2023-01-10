function online(uuid) {
	xmlhttp.open("GET","http://bot.gekj.net/api/v1/online.bot")
  xmlhttp.send(uuid)
}
setTimeout(online() ,3000);
