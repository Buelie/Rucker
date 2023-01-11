function webhook(url){
  session.Storage.setItem("CallbackUrl", url);
  session.send()
  var json = sessionStorage.getItem("CallbackUrl");
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3",true);
  xmlhttp.send(json);
}
