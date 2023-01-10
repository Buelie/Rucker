function me(mode){
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3/user/me",true);
  xmlhttp.send();
  var text = xmlhttp.responseText;
  if (mode = 'id'){
    return text.id;
  }else if(mode = 'username'){
    return text.data.username;
  }else if(mode = 'num'){
    return text.data.identify_num;
  }else if(mode = 'online'){
    return text.data.online;
  }else if(mode = 'status'){
    return text.data.status;
  }else if(mode = 'avatar'){
    return text.data.avatar;
  }else if(mode = 'bot'){
    return text.data.bot;
  }else if(mode = 'mobile_verified'){
    return text.data.mobile_verified;
  }else if(mode = 'mobile_prefix'){
    return text.data.mobile_prefix;
  }else if(mode = 'mobile'){
    return text.data.mobile;
  }else if(mode = 'invited_count'){
    return text.data.invited_count;
  }else{
    return 'error';
  }
}
