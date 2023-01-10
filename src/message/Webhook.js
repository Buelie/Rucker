function webhook(url){
  sessionStorage.setItem("CallbackUrl", url);
  var json = sessionStorage.getItem("CallbackUrl");
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3",true);
  xmlhttp.send(json);
}
