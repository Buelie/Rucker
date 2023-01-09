function card(content){
  var card = {
    "type":10,
    "content":content
  }
  //发送请求
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3/message/create",true);
  xmlhttp.send(card);
}
