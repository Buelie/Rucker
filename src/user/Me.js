function me(mode){
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3/user/me",true);
  xmlhttp.send();
  var text = xmlhttp.responseText;
  if (mode = 'id'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.id;
  }else if(mode = 'username'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.username;
  }else if(mode = 'num'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.identify_num;
  }else if(mode = 'online'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.online;
  }else if(mode = 'status'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.status;
  }else if(mode = 'avatar'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.avatar;
  }else if(mode = 'bot'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.bot;
  }else if(mode = 'mobile_verified'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.mobile_verified;
  }else if(mode = 'mobile_prefix'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.mobile_prefix;
  }else if(mode = 'mobile'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.mobile;
  }else if(mode = 'invited_count'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.invited_count;
  }else{
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return 'error';
  }
}
