function crawling(){
  try{
    var xmlhttp;
    if (window.XMLHttpRequest){
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
    }else{
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //向KOOK发送POST请求
    xmlhttp.open("GET","https://www.kookapp.cn/app/discover",true);
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
    //如果xml变量为空
    if (xml == ''){
      //返回Text数据
      return DataText;
    //如果xml变量不为空
    }else if (xml != ''){
      //返回XML数据
      return xml;
    //如果没有数据返回
    }else{
      //返回None
      return 'None';
    }
  //如果执行出错，执行如下代码：
  }catch(error){
    //返回错误信息
    return error;
  }
}
