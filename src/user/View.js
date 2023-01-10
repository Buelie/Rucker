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
  }else if (mode == 'identify_num'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.identify_num;
  }else if (mode == 'online'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.online;
  }else if (mode == 'status'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.status;
  }else if (mode == 'avatar'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.avatar;
  }else if (mode == 'vip_avatar'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.vip_avatar;
  }else if (mode == 'is_vip'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.is_vip;
  }else if (mode == 'bot'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.bot;
  }else if (mode == 'mobile_verified'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.mobile_verified;
  }else if (mode == 'roles'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.roles;
  }else if (mode == 'joined_at'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.joined_at;
  }else if (mode == 'active_time'){
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return text.data.active_time;
  }else{
    console.log("Data return status:"+text.message+",Return status code:"+text.code);
    return 'error';
  }
}
