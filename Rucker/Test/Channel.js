function id(){
	xmlhttp.open("GET","https://www.kookapp.cn/api/v3/channel/view")
	xmlhttp.send()
	var ner = xmlhttp.responseText;
	return ner.data[0];
}
