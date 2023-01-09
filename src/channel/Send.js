function send(info){
    var send = {
        "type": 1,
        "content": info
    }
    xmlhttp.open("POST","https://www.kookapp.cn/api/v3/message/createapi/v3",true);
    xmlhttp.send(send);
}
