function view(mode){
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3/user/view",true);
  xmlhttp.send();
  var text = xmlhttp.responseText;
  if (mode == 'id'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.id;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'nickname'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.nickname;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if (mode == 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }
}
