xmlhttp.open("POST","https://www.kookapp.cn/api/v3",true);
xmlhttp.send();

function send(info){
    var ero = {
        "code" : 0, // integer, 错误码，0代表成功，非0代表失败，具体的错误码参见错误码一览
        "message" : "error info", // string, 错误消息，具体的返回消息会根据Accept-Language来返回。
        "data" : [], // mixed, 具体的数据。
    }
}
