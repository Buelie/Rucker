function crawling(){
  var xmlhttp;
  if (window.XMLHttpRequest){
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
  }else{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  //向KOOK发送POST请求
  xmlhttp.open("POST","https://www.kookapp.cn/app/discover",true);
  //发送请求
  xmlhttp.send();
  //获取Text数据
  var DataText = xmlhttp.responseText;
  //获取XML数据
  var DataXML = xmlhttp.responseXML
  //解析XML数据
  var txt = "";
  for (i=0;i<x.length;i++){
    txt = txt + DataXML[i].childNodes[0].nodeValue + "";
  }
  //返回解析的XML数据
  var xml = txt;
}
