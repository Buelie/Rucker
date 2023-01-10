function me(mode){
  xmlhttp.open("POST","https://www.kookapp.cn/api/v3/user/me",true);
  xmlhttp.send();
  var text = xmlhttp.responseText;
  if (mode = 'id'){
    return text.id;
  }else if(mode = 'username'){
    return text.username;
  }else if(mode = 'num'){
    return text.identify_num;
  }else if(mode = 'online'){
    return text.online;
  }else if(mode = 'status'){
    return text.status;
  }else if(mode = 'avatar'){
    return text.avatar;
  }else if(mode = 'bot'){
    return text.bot;
  }else if(mode = 'mobile_verified'){
    return text.mobile_verified;
  }else if(mode = 'mobile_prefix'){
    return text.mobile_prefix;
  }else if(mode = 'mobile'){
    return text.mobile;
  }else if(mode = 'invited_count'){
    return text.invited_count;
  }else{
    return 'error';
  }
}
