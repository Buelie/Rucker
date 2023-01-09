function kmarkdown(content){
  var kmarkdown = {
    "type":10,
    "content":content,
  }
  //发送请求
  xmlhttp.open(kmarkdown,"https://www.kookapp.cn/api/v3/message/create",true);
  xmlhttp.send();
}
