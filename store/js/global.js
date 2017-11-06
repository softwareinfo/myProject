$(function() {
  //页面公共部分js代码 
  /*
   * 页面菜单导航
   */
  //一级菜单
  $(".index_menu_hover").hover(function() {
    $(".index_menu_list").stop(true, true).slideDown(800);
  }, function() {
    $(".index_menu_list").stop(true, true).slideUp(800);
  })

  //二级菜单
  $(".index_menu_list>li").hover(function() {
    $(this).children(".index_small_menu").stop(true, true).fadeIn(800);
    $(this).addClass("on");
  }, function() {
    $(this).children(".index_small_menu").stop(true, true).fadeOut(800);
    $(this).removeClass("on");
  })

  //导航菜单的选中的背景样式
  $(".main_menu").hover(function() {
    $(this).addClass("active");
    $(this).children("a").css({
      "color": "#fff"
    });
  }, function() {
    $(this).removeClass("active");
    $(this).children("a").css({
      "color": "#333"
    });
  })
$(".index_menu_home_page").addClass("active");
//$(".index_menu_home_page").children("a").css({
//  "color": "#fff"
//});
  //  默认选中当前页选中，*注意修改不同分页的选中状态
  $(".index_menu_home_page").hover(function() {
    $(this).addClass("active");
    $(this).children("a").css({
      "color": "#fff"
    });
  }, function() {
    $(this).addClass("active");
    $(this).children("a").css({
      "color": "#fff"
    });
  })
  

  //顶部切换城市弹窗
  $(".control-label").click(function() {
    layer.open({
      skin: 'title-class',
      type: 1,
      title: false,
      area: ['702px', '355px'],
      closeBtn: 1,
      content: $(".control-group"),
      offset: 'c', //具体配置参考：offset参数项,
      btn: '保存',
      btnAlign: 'c', //按钮居中
      yes: function() {
        var location_p = $("#location_p").val();
        var location_c = $("#location_c").val();
        var location_a = $("#location_a").val();
        $(".control-label").children(".select_now").html(location_p + location_c + location_a);
        layer.closeAll()
      }
    })
  });

  //热门商品添加搜索
 //  $(".index_head_search").find("span").click(function(){
 //  $(this).each(function(){
	// $(this).parents(".index_head_search").find("input").val($(this).html());
 //   })
 //  });


  //我的积分
  $(".my_credits_main_details_content").hover(function() {
    $(this).addClass("on");
  }, function() {
    $(this).removeClass("on");
  })

  //我的钱包，选择金额项
  $(".my_wallet_figure_list li").click(function() {
    $(this).addClass("on").siblings().removeClass("on");
  })
  $(".my_wallet_figure_list li").first().addClass("on");

  //我的消息
  var my_message_main_liH = $(".my_message_main").find("li").outerHeight(); //获取li的高度
  var my_message_main_liL = $(".my_message_main").find("li").size(); //获取li的长度（个数）
  $(".del").click(function() { //点击删除
    $(this).parents("li").remove(); //移除整个li DOM结构
    my_message_main_liL--; //移除后li的长度减1
    if(my_message_main_liL <= 1) { //判断父元素中li的个数
      $(this).parents(".my_message_main").remove(); //小于1个时，删除整个父结构
    }
    $(this).parents(".my_message_main").css({
      "height": my_message_main_liH * my_message_main_liL
    }); //否则每次删除一个li，父元素减掉相应高度
  })
  $(".my_message_main_title").nextAll("li").hover(function() {
    $(this).addClass("on");
  }, function() {
    $(this).removeClass("on");
  })
  //账单
  $(".bill_main_title").nextAll("li").hover(function() {
    $(this).addClass("on");
  }, function() {
    $(this).removeClass("on");
  });

  /*
   * author: jiaWei Guo
   */
  //  首页导航选项卡
  $('.tab_left_navigation a').click(function() {
    var i = $(this).index();
    $('.tab_bd_all_navigation .tab_bd_navigation').first().show().siblings().hide();
    $(this).addClass('on').siblings().removeClass("on");
    $('.tab_bd_all_navigation .tab_bd_navigation').eq(i).fadeIn(100).siblings().fadeOut(100);
  })
  //  首页轮播图
  $('.pic_home a').first().show().siblings().hide();
  for(var j = 0; j < $('.pic_home a').length; j++) {
    $('.dot_home').append('<li></li>');
  }
  $('.dot_home li').first().addClass('on');

  var t = 0;

  function bann() {
    $('.pic_home a').eq(t).fadeIn(1000).siblings().fadeOut(1000);
  }
  $('.btn-prev_home').click(function() {
    t--;
    if(t < 0) {
      t = $('.pic_home a').length - 1;
    }
    bann();
    $('.dot_home li').eq(t).addClass('on').siblings().removeClass('on');
  })
  $('.btn-next_home').click(function() {
    t++;
    if(t > $('.pic_home a').length - 1) {
      t = 0;
    }
    bann();
    $('.dot_home li').eq(t).addClass('on').siblings().removeClass('on');
  })

  $('.dot_home li').click(function() {
    $('.dot_home li').eq($(this).index()).addClass('on').siblings().removeClass('on');
    t = $(this).index();
    bann();
  })

  var timerArr = null;
  timerArr = setInterval(function() {
    t++;
    if(t > $('.pic_home a').length) {
      t = 0;
    }
    bann();
    $('.dot_home li').eq(t).addClass('on').siblings().removeClass('on')
  }, 3000);
  $('.banner_home').hover(function() {
    clearInterval(timerArr);
  }, function() {
    timerArr = setInterval(function() {
      t++;
      if(t > $('.pic_home a').length) {
        t = 0;
      }
      bann();
      $('.dot_home li').eq(t).addClass('on').siblings().removeClass('on');
    }, 3000);
  })
  //倒计时
  //对所有的计时器进行处理
  var timers = $(".timer-simple-seconds");
  for(var i = 0; i < timers.length; i++) {
    var timer = $(timers[i]);

    if(timer.attr("timestamp")) {
      //如果是时间戳，则预处理一下时间为倒计时秒数
      prepareProcessTimestamp2Timer(timer);
    } else if(timer.attr("datetime")) {
      //处理时间格式为倒计时秒数
      prepareProcessDatetime2Timer(timer);
    }
    //先调用一次，避免误差
    processTimer(timer);
    setInterval(processTimer, 1000, timer);
  }

  /**
   * doWhat: 这个函数将时间戳预处理成统一的倒计时描述
   * 
   * 对时间做一个预处理，因为如果服务器直接返回剩余的描述的话从服务器相应到客户端虽然短到几百毫秒但总是会有偏差的，这样子不太好
   * 所以服务器只需要设置一个时间戳表示到哪里停止就可以了
   */
  function prepareProcessTimestamp2Timer(timer) {
    var total = parseInt(timer.attr("timestamp"));
    total = Math.round(total / 1000);
    var now = new Date().getTime() / 1000;
    timer.attr("timer", total - now);
  }

  /**
   * 将日期时间格式转为倒计时格式
   */
  function prepareProcessDatetime2Timer(timer) {
    var timestamp = new Date(timer.attr("datetime")).getTime();
    timer.attr("timestamp", timestamp);
    prepareProcessTimestamp2Timer(timer);
  }

  /**
   * 倒计时，滴答滴答...
   * @param {Object} timer
   */
  function processTimer(timer) {
    var total = parseInt(timer.attr("timer"));
    var t = total;

    //倒计时不能为负
    if(total < 0) return; 
    //TODO后续版本加上计时完毕可以回调函数

    //找到显示时间的元素
    var day = timer.find(".day");
    var hour = timer.find(".hour");
    var minute = timer.find(".minute");
    var second = timer.find(".second");

    //刷新计时器显示的值
    if(day.length) {
      var d = Math.floor(t / (60 * 60 * 24));
      day.text(d);
      t -= d * (60 * 60 * 24);
    }
    if(hour.length) {
      var h = Math.floor(t / (60 * 60));
      hour.text((h < 10 ? "0" : "") + h);
      t -= h * (60 * 60);
    }
    if(minute.length) {
      var m = Math.floor(t / 60);
      minute.text((m < 10 ? "0" : "") + m);
      t -= m * 60;
    }
    if(second.length) {
      second.text((t < 10 ? "0" : "") + t);
    }

    //一秒过去了...
    total--;
    timer.attr("timer", total);
  }

  //首页小轮播
  //获取li的宽度
  var liW = $('.small_con_home li').eq(0).width();
  //获取li的个数
  var len = $('.small_con_home li').length;
  //获取LI的高度
  var liH = $('.small_con_home li').eq(0).height();
  var j = 0;
  $('.small_con_home').width(liW * len).height(liH).css("position", "absolute");
  for(var i = 0; i < len - 4; i++) {
    $('.con_num_home').append("<a></a>");
  }
  $('.con_num_home').find("a").first().addClass("on").siblings().removeClass("on");

  function move() {
    $('.small_con_home').stop().animate({
      "left": -j * (liW + 20)
    }, 500);
    $('.con_num_home').find("a").eq(j).addClass("on").siblings().removeClass("on");
  }
  $('.con_num_home').find("a").click(function() {
    j = $(this).index();
    move();
  })
  //商家图片轮播
  var llen = $('main_up_down_left_merchant').length;
  var r = 0;
  $('.touteng_merchant a').first().show().siblings().hide();
  $('.cela_merchant li').first().addClass("on").siblings().removeClass("on");

  function move_alone() {
    if(r == (len - 1)) {
      $(".next_merchant").attr("disabled", "disabled");
    } else {
      $(".next_merchant").removeAttr("disabled");
    }
    if(r == 0) {
      $(".prev_merchant").attr("disabled", "disabled");
    } else {
      $(".prev_merchant").removeAttr("disabled");
    }
    $('.touteng_merchant a').eq(r).fadeIn(1000).siblings().fadeOut(1000);
    $('.cela_merchant li').eq(r).addClass("on").siblings().removeClass("on");
  }
  $('.next_merchant').click(function() {
    r++;
    move_alone();
  })
  $('.prev_merchant').click(function() {
    r--;
    move_alone();
  })
  $('.cela_merchant li').click(function() {
    $('.cela_merchant li').eq($(this).index()).addClass('on').siblings().removeClass('on');
    r = $(this).index();
    move_alone();
  })

  //商家图片轮播
  var llen = $('main_up_down_left_goodsdetail').length;
  var r = 0;
  $('.touteng_goodsdetail a').first().show().siblings().hide();
  $('.cela_goodsdetail li').first().addClass("on").siblings().removeClass("on");

  function move_alone_again() {
    if(r == (len - 1)) {
      $(".next_goodsdetail").attr("disabled", "disabled");
    } else {
      $(".next_goodsdetail").removeAttr("disabled");
    }
    if(r == 0) {
      $(".prev_goodsdetail").attr("disabled", "disabled");
    } else {
      $(".prev_goodsdetail").removeAttr("disabled");
    }
    $('.touteng_goodsdetail a').eq(r).fadeIn(1000).siblings().fadeOut(1000);
    $('.cela_goodsdetail li').eq(r).addClass("on").siblings().removeClass("on");
  }
  $('.next_goodsdetail').click(function() {
    r++;
    move_alone_again();
  })
  $('.prev_goodsdetail').click(function() {
    r--;
    move_alone_again();
  })
  $('.cela_goodsdetail li').click(function() {
    $('.cela_goodsdetail li').eq($(this).index()).addClass('on').siblings().removeClass('on');
    r = $(this).index();
    move_alone_again();
  })

  //倒计时定位
  //对所有的计时器进行处理
  var timers = $(".timer-simple-seconds-two");
  for(var i = 0; i < timers.length; i++) {
    var timer = $(timers[i]);

    if(timer.attr("timestamp")) {
      //如果是时间戳，则预处理一下时间为倒计时秒数
      prepareProcessTimestamp2Timer(timer);
    } else if(timer.attr("datetime")) {
      //处理时间格式为倒计时秒数
      prepareProcessDatetime2Timer(timer);
    }
    //先调用一次，避免误差
    processTimer(timer);
    setInterval(processTimer, 1000, timer);
  }

  /**
   * doWhat: 这个函数将时间戳预处理成统一的倒计时描述
   * 
   * 对时间做一个预处理，因为如果服务器直接返回剩余的描述的话从服务器相应到客户端虽然短到几百毫秒但总是会有偏差的，这样子不太好
   * 所以服务器只需要设置一个时间戳表示到哪里停止就可以了
   */
  function prepareProcessTimestamp2Timer(timer) {
    var total = parseInt(timer.attr("timestamp"));
    total = Math.round(total / 1000);
    var now = new Date().getTime() / 1000;
    timer.attr("timer", total - now);
  }

  /**
   * 将日期时间格式转为倒计时格式
   */
  function prepareProcessDatetime2Timer(timer) {
    var timestamp = new Date(timer.attr("datetime")).getTime();
    timer.attr("timestamp", timestamp);
    prepareProcessTimestamp2Timer(timer);
  }

  /**
   * 倒计时，滴答滴答...
   * @param {Object} timer
   */
  function processTimer(timer) {
    var total = parseInt(timer.attr("timer"));
    var t = total;

    //倒计时不能为负
    if(total < 0) return; //TODO后续版本加上计时完毕可以回调函数

    //找到显示时间的元素
    var day = timer.find(".day");
    var hour = timer.find(".hour");
    var minute = timer.find(".minute");
    var second = timer.find(".second");

    //刷新计时器显示的值
    if(day.length) {
      var d = Math.floor(t / (60 * 60 * 24));
      day.text(d);
      t -= d * (60 * 60 * 24);
    }
    if(hour.length) {
      var h = Math.floor(t / (60 * 60));
      hour.text((h < 10 ? "0" : "") + h);
      t -= h * (60 * 60);
    }
    if(minute.length) {
      var m = Math.floor(t / 60);
      minute.text((m < 10 ? "0" : "") + m);
      t -= m * 60;
    }
    if(second.length) {
      second.text((t < 10 ? "0" : "") + t);
    }

    //一秒过去了...
    total--;
    timer.attr("timer", total);
  }
  //规格选择
  $('.guige_goodsdetail .small_three_goodsdetail').each(function() {
    $('.guige_goodsdetail .small_three_goodsdetail').click(function() {
      $(this).addClass('goodsdetail_haha').siblings().removeClass('goodsdetail_haha');
    })
  })

  $('.guige_goodsdetail_you .small_three_goodsdetail_you').each(function() {
    $('.guige_goodsdetail_you .small_three_goodsdetail_you').click(function() {
      $(this).addClass('goodsdetail_haha').siblings().removeClass('goodsdetail_haha');
    })
  })

  $('.add_one_goodsdetail').click(function() {
    layer.open({
      skin: 'jia-class',
      type: 1,
      title: false,
      content: $('.add_car_success'),
      area: ["656px", "315px"],
      btn: ['继续购物', '查看购物车'],
      btnAlign: 'c',
      yes: function(index, layero) {
        //按钮【按钮一】的回调
        window.location.href = "index.html";
      },
      btn2: function(index, layero) {
        //按钮【按钮二】的回调
        window.location.href = "shoppingCart.html";
        return false //开启该代码可禁止点击该按钮关闭
      }
    });
  })

  $(".dd_home").click(function() {
    layer.open({
      skin: 'jiaer-class',
      type: 1,
      title: false,
      closeBtn: 0,
      skin: 'layui-layer-rim', //加上边框
      area: ['400px', '510px'], //宽高
      content: $(".abc_home")
    });
  })

  /////////////////////////////手机验证登录   忘记密码   账号密码登录  注册  js部分////////////////////////////////
  /////////////手机号码验证///////////////////
  $("#iphone_num input").blur(function() {
    var iphone_num = $(this).val();
    var reg1 = /^1(3[0-9]|4[5|7]|5[0|2|3|1|5|6|7|8|9]|7[1|7]|8[0-9])\d{8}$/
    if(reg1.test(iphone_num)) {
      $('#iphone_num_error').css("opacity", "0");
      $("#iphone_num_correct").css("opacity", "1");
    } else {
      $('#iphone_num_error').css("opacity", "1");
      $("#iphone_num_correct").css("opacity", "0");
    }
  })
  /////////////手机号码验证///////////////////
  /////////////第一次密码验证///////////////////
  $("#password_one input").blur(function() {
    var password_one = $(this).val();
    var reg2 = /^[a-zA-Z0-9]{6,20}$/
    if(reg2.test(password_one)) {
      $('#password_one_error').css("opacity", "0");
      $("#password_one_correct").css("opacity", "1");
    } else {
      $('#password_one_error').css("opacity", "1");
      $("#password_one_correct").css("opacity", "0");
    }
  })
  /////////////第一次密码验证///////////////////
  /////////////第二次密码验证///////////////////
  $("#password_two input").blur(function() {
    var password_two = $(this).val();
    var password_one = $(this).parents(".wxt_logging_banner_box").find("#password_one input").val();
    if(password_two == password_one) {
      $('#password_two_error').css("opacity", "0");
      $("#password_two_correct").css("opacity", "1");
    } else {
      $('#password_two_error').css("opacity", "1");
      $("#password_two_correct").css("opacity", "0");
    }
  })
  /////////////第二次密码验证///////////////////
  /////////////注册页面绿色圆点///////////////////
  // 页面绿色圆点开始
  $(".wxt_register_agreement_radioInput").click(function() {
    $(this).css('border', '1px solid #498e3d')
  });
  // 页面绿色圆点结束
  /////////////注册页面绿色圆点///////////////////
  /////////////增加新地址页面绿色圆点///////////////////
  // 页面绿色圆点开始
  $(".wxt_add_new_address_radioInput").click(function() {
    $(this).css('border', '1px solid #498e3d')
  });
  // 页面绿色圆点结束
  /////////////增加新地址页面绿色圆点///////////////////
  /////////////////////////////手机验证登录   忘记密码   账号密码登录  注册  js部分////////////////////////////////

  /////////////////////////////同城服务js部分////////////////////////////////

  $(".cba_home").click(function() {
    layer.open({
      skin: 'jiasan-class',
      type: 1,
      title: false,
      btn: '添加到购物车',
      content: $(".nba_home"),
      yes: function(index, layero) {
        //按钮【按钮一】的回调
        window.location.href = "shoppingCart.html";
      }
    });
  })

  $('.huoqu_all_one').click(function() {
    $('.huoqu_all_one').addClass('on');
    $('.huoqu_all_two').removeClass('on');
    $('.huoqu_all_three').removeClass('on');
  })
  $('.huoqu_all_two').click(function() {
    $('.huoqu_all_two').addClass('on');
    $('.huoqu_all_one').removeClass('on');
    $('.huoqu_all_three').removeClass('on');
  })
  $('.huoqu_all_three').click(function() {
    $('.huoqu_all_three').addClass('on');
    $('.huoqu_all_two').removeClass('on');
    $('.huoqu_all_one').removeClass('on');
  })

  $('.huoqu_yanse_one').click(function() {
    $('.huoqu_yanse_one').addClass('on');
    $('.huoqu_yanse_two').removeClass('on');
  })

  $('.huoqu_yanse_two').click(function() {
    $('.huoqu_yanse_two').addClass('on');
    $('.huoqu_yanse_one').removeClass('on');
  })


     if($('.affirm_bd_goods_jia').prev(".affirm_bd_goods_numbers").val() == 1) {
      $('.affirm_bd_goods_jian').attr("disabled", "disabled");
    }

   $('.affirm_bd_goods_jia').click(function() {
    var goods_num = parseInt($(this).prev(".affirm_bd_goods_numbers").val()) + 1;
    $(this).prev(".affirm_bd_goods_numbers").val(goods_num);
    if($(this).prev(".affirm_bd_goods_numbers").val() > 1) {
      $('.affirm_bd_goods_jian').removeAttr('disabled');
    }
  })
  $('.affirm_bd_goods_jian').click(function() {
    var good_num = parseInt($(this).next(".affirm_bd_goods_numbers").val()) - 1;
    $(this).next(".affirm_bd_goods_numbers").val(good_num);
    if($(this).next(".affirm_bd_goods_numbers").val() == 1) {
      $(this).attr("disabled", "disabled");
    }
  })


  window._bd_share_config = {
    "common": {
      "bdSnsKey": {},
      "bdText": "",
      "bdMini": "2",
      "bdPic": "",
      "bdStyle": "0",
      "bdSize": "16"
    },
    "share": {},
    "selectShare": {
      "bdContainerClass": null,
      "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
    }
  };
  with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

  /////////////////////////////手机验证登录   忘记密码   账号密码登录  注册  js部分////////////////////////////////
  /////////////手机号码验证///////////////////
  $("#iphone_num input").blur(function() {
    var iphone_num = $(this).val();
    var reg1 = /^1(3[0-9]|4[5|7]|5[0|2|3|1|5|6|7|8|9]|7[1|7]|8[0-9])\d{8}$/
    if(reg1.test(iphone_num)) {
      $('#iphone_num_error').css("opacity", "0");
      $("#iphone_num_correct").css("opacity", "1");
    } else {
      $('#iphone_num_error').css("opacity", "1");
      $("#iphone_num_correct").css("opacity", "0");
    }
  })
  /////////////手机号码验证///////////////////
  /////////////第一次密码验证///////////////////
  $("#password_one input").blur(function() {
    var password_one = $(this).val();
    var reg2 = /^[a-zA-Z0-9]{6,20}$/
    if(reg2.test(password_one)) {
      $('#password_one_error').css("opacity", "0");
      $("#password_one_correct").css("opacity", "1");
    } else {
      $('#password_one_error').css("opacity", "1");
      $("#password_one_correct").css("opacity", "0");
    }
  })
  /////////////第一次密码验证///////////////////
  /////////////第二次密码验证///////////////////
  $("#password_two input").blur(function() {
    var password_two = $(this).val();
    var password_one = $(this).parents(".wxt_logging_banner_box").find("#password_one input").val();
    if(password_two == password_one) {
      $('#password_two_error').css("opacity", "0");
      $("#password_two_correct").css("opacity", "1");
    } else {
      $('#password_two_error').css("opacity", "1");
      $("#password_two_correct").css("opacity", "0");
    }
  })
  /////////////第二次密码验证///////////////////
  /////////////注册页面绿色圆点///////////////////
  // 页面绿色圆点开始
  $(".wxt_register_agreement_radioInput").click(function() {
    $(this).css('border', '1px solid #498e3d')
  });
  // 页面绿色圆点结束
  /////////////注册页面绿色圆点///////////////////
  /////////////增加新地址页面绿色圆点///////////////////
  // 页面绿色圆点开始
  $(".wxt_add_new_address_radioInput").click(function() {
    $(this).css('border', '1px solid #498e3d')
  });
  // 页面绿色圆点结束
  /////////////增加新地址页面绿色圆点///////////////////
  /////////////////////////////手机验证登录   忘记密码   账号密码登录  注册  js部分////////////////////////////////

  /////////////////////////////积分订单js部分////////////////////////////////
  ////////////删除订单开始//////////////////
  $(".wxt_integral_indent_matter6 input").click(function() {
    $(this).parents(".wxt_integral_indent_particulars").remove();
  })
  ////////////删除订单结束//////////////////
  /////////////////////////////积分订单js部分////////////////////////////////

  /////////////////////////////增加新地址js部分////////////////////////////////
  $(".tel_input1 input").blur(function() {
    var tel_input1 = $(this).val();
    var reg3 = /^1(3[0-9]|4[5|7]|5[0|2|3|1|5|6|7|8|9]|7[1|7]|8[0-9])\d{8}$/
    if(reg3.test(tel_input1)) {
      $('.wxt_add_address_error').html('手机号码格式输入正确');
    } else {
      $('.wxt_add_address_error').html('手机号码格式输入错误').css('color', 'red');
    }
  })
  $(".tel_input2 input").blur(function() {
    var tel_input2 = $(this).val();
    var reg4 = /^\d{3,4}$/
    if(reg4.test(tel_input2)) {
      $('.wxt_add_address_error').html('区号格式输入正确');
    } else {
      $('.wxt_add_address_error').html('区号格式输入错误').css('color', 'red');
    }
  })
  $(".tel_input3 input").blur(function() {
    var tel_input3 = $(this).val();
    var reg5 = /^\d{7,8}$/
    if(reg5.test(tel_input3)) {
      $('.wxt_add_address_error').html('电话号码格式输入正确');
    } else {
      $('.wxt_add_address_error').html('电话号码格式输入错误').css('color', 'red');
    }
  })
  /////////////////////////////增加新地址js部分////////////////////////////////

  /////////////////////////////同城服务js部分////////////////////////////////
  ////////////////图片轮播开始//////////////////////// 
  var speed = 3000;
  // 把第一张显示，其他的隐藏
  $('.wxt_city-wide_banner_imgs a').first().show().siblings().hide();
  // 把小圆点添加至ul.banner_num中
  for(var j = 0; j < $('.wxt_city-wide_banner_imgs a').length; j++) {
    $('.wxt_city-wide_banner_num').append('<li></li>');
  }
  // 将小圆点的第一个给个class
  $('.wxt_city-wide_banner_num li').first().addClass('on');
  
  // 定义一个函数，
  function banner() {
  	var i = 0;
    $('.wxt_city-wide_banner_imgs a').eq(i).fadeIn(1000).siblings().fadeOut(1000);
  }
  //console.log($('.banner_imgs a').length);
  $('.wxt_city-wide_btn-prev').click(function() {
    i--;
    if(i < 0) {
      i = $('.wxt_city-wide_banner_imgs a').length - 1;
    }
    banner();
    $('.wxt_city-wide_banner_num li').eq(i).addClass("on").siblings().removeClass("on");
  })

  $('.wxt_city-wide_btn-next').click(function() {
    i++;
    if(i >= $('.wxt_city-wide_banner_imgs a').length) {
      i = 0
    }
    banner();
    $('.wxt_city-wide_banner_num li').eq(i).addClass("on").siblings().removeClass("on");
  })
  // 小圆点的事件
  $('.wxt_city-wide_banner_num li').click(function() {
    //console.log($(this).index());
    $('.wxt_city-wide_banner_num li').eq($(this).index()).addClass("on").siblings().removeClass("on");
    i = $(this).index();
    banner();
  })

  //定时器
  var timer = null;
  timer = setInterval(function() {
    i++;
    if(i >= $('.wxt_city-wide_banner_imgs a').length) {
      i = 0
    }
    banner();
    $('.wxt_city-wide_banner_num li').eq(i).addClass("on").siblings().removeClass("on");
  }, speed)

  $('.wxt_city-wide_banner').hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval(function() {
      i++;
      if(i >= $('.wxt_city-wide_banner_imgs a').length) {
        i = 0
      }
      banner();
      $('.wxt_city-wide_banner_num li').eq(i).addClass("on").siblings().removeClass("on");
    }, speed)
  });
  ////////////图片轮播结束////////////////
  ////////////翻页开始////////////////
  /**
   * 页码第一个给样式
   */
  $('.molbf_ul li').eq(0).addClass('onnum');
  /**
   * 页码滚动
   * &pengfanfna
   */
  function yd() {
    $('.molbf_ul li').eq(n).addClass('onnum').siblings().removeClass('onnum');
  }
  var n = 0;
  $('.btn-prev').click(function() {
    n--;
    if(n < 0) {
      n = $('.molbf_ul li').length - 1;
    }
    yd();
  })
  $('.btn-next').click(function() {
    n++;
    if(n > $('.molbf_ul li').length - 1) {
      n = 0;
    }
    yd();
  })
  ////////////翻页结束////////////////
  ////////////菜单1开始////////////////
  $(".wxt_city-wide_submenu li").eq(2).addClass("wxt_menuon")
  $(".wxt_city-wide_submenu li").click(function() {
    $(this).addClass("wxt_menuon").siblings().removeClass("wxt_menuon")
  })
  ////////////菜单1结束////////////////
  ////////////菜单2开始////////////////
  $(".wxt_city-wide_goods_mneu li").eq(1).addClass("wxt_onmenu2")
  $(".wxt_city-wide_goods_mneu li").click(function() {
    $(this).addClass("wxt_onmenu2").siblings().removeClass("wxt_onmenu2")
  })
  ////////////菜单2结束////////////////
  /////////////////////////////同城服务js部分////////////////////////////////

  /* 
   * author:zeng wang
   */

  //判断手机号是否正确
  $('#change_telephone_input1').blur(function() {
    var telephone = $(this).val();
    if(telephone == '') {
      $('span.error1').html('对不起，输入不能为空');
      $('#wz_password').attr("disabled", "disabled");
      $('#wz_repassword').attr("disabled", "disabled");
    } else {
      // 1开头 3（0-9） 4（5 7）5（0 1 2 3 5 6 7 8 9）7（1 7）8（0-9）
      var reg1 = /^1(3[0-9]|4[5|7]|5((?!4)[0-9])|7[1|7]|8[0-9])\d{8}$/;
      if(reg1.test(telephone)) {
        $('span.error1').html('');
        $('#wz_password').removeAttr('disabled');
        $('#wz_repassword').attr("disabled", "disabled");
      } else {
        $('span.error1').html('请输入正确的手机号');
      }
    }
  })

  //判断密码格式是否正确
  $('#wz_password').blur(function() {
    var password = $(this).val();
    if(password == '') {
      $('span.error2').html('对不起，输入不能为空');
      $('#wz_repassword').attr("disabled", "disabled");
    } else {
      var reg2 = /\w{6,20}/;
      if(reg2.test(password)) {
        $('span.error2').html('');
        $('#wz_repassword').removeAttr('disabled');
      } else {
        $('span.error2').html('请输入格式正确的密码');
      }
    }
  })

  //判断再次输入密码确认
  $('#wz_repassword').blur(function() {
    var repassword = $(this).val();
    if(repassword == '') {
      $('span.error3').html('对不起，输入不能为空');
    } else {
      if(repassword == $('#wz_password').val()) {
        $('span.error3').html('');
      } else {
        $('span.error3').html('两次密码不一致');
      }
    }
  })
  $('#wz_yanzheng').blur(function() {
    var yanzheng = $(this).val();
  })
  $('#wz_recept_yanzheng').blur(function() {
    var recept_yanzheng = $(this).val();
  })
  //   //点击时弹出对话框
  //     $('.change_telephone_input4').click(function(){
  //        $('.change_telephone1_content_box').css('display','block');
  //     })
  //点击时弹出对话框
  $('.change_telephone_input4').click(function() {
    var telephone = $('#change_telephone_input1').val();
    var password = $('#wz_password').val();
    var repassword = $('#wz_repassword').val();
    var yanzheng = $('#wz_yanzheng').val();
    var recept_yanzheng = $('#wz_recept_yanzheng').val();
    if(telephone == '' || password == '' || repassword == '' || yanzheng == '' || recept_yanzheng == '') {
      $('span.error4').html('对不起，请输入信息');
    } else {
      $('span.error4').html('');
      $('.change_telephone1_content_box').css('display', 'block');
    }
  })

  //地址管理的删除地址
  $('.select_remove_adress').click(function() {
    $(this).parents('.adress_manage_content_show2').remove();
  })
  
  
     //设置地址管理的默认地址的点击事件
$('.moren_adress').first().hide().siblings().show();
$('.adress_manage_line').first().hide().siblings().show();
 function moren(){
   $('.adress_manage_content_show2').first().find('.adress_manage_content_show2_menu6').find('.moren_adress').hide();
    $('.adress_manage_content_show2').first().find('.adress_manage_content_show2_menu6').find('.adress_manage_line').hide();$('.adress_manage_content_show2').first().siblings().find('.adress_manage_content_show2_menu6').find('.moren_adress').show();
  $('.adress_manage_content_show2').first().siblings().find('.adress_manage_content_show2_menu6').find('.adress_manage_line').show();
 }
$('.moren_adress').live('click', function(){
var moren_adress=$(this).parents('.adress_manage_content_show2').html();
var first_moren_adress=$('.adress_manage_content_show2').first().html();
console.log(moren_adress);
$(this).parents('.adress_manage_content_show2').html(first_moren_adress);
$('.adress_manage_content_show2').first().html(moren_adress);
moren();
});

  
  
  
  
  //删除空了后跳转页面
  $('.select_remove_adress').click(function() {
    $(this).parents('.adress_manage_content_show2').remove();
    if($('.null_box .adress_manage_content_show2').length == "0") {
      $(location).attr('href', 'adress_manage.html');
    }
  })

  /**
   * 个人资料
   * author: chaobiao peng
   */
  $(".pay_list_c1").on("click", function() {
    $(this).addClass("on").siblings().removeClass("on");
  })

  $(".personal_center_right_list_ul li a").on("click", function() {
    $(this).addClass("pcrlon").siblings().removeClass("pcrlon");
  })

  $('.code1').blur(function() {
    var val = $(this).val();
    //         var reg1=/^1(3|4|5|7|8)\d{9}$/;
    var reg1 = /^1(3[0-9]|4[5|7]|5((?!4)[0-9])|7(1|7)|8[0-9])\d{8}$/;
    if(reg1.test(val)) {
      $('span.error1').html('输入正确').css('color', '#4b943d');
    } else {
      $('span.error1').html('请输入正确的手机号!').css('color', 'red');
    }
  })

  /**
   * 我的订单
   */
  $(".clear_oredr").on("click", function() {
    $(this).parents('.my_order_left_box').remove();
  })

  /**
   * 页码第一个给样式
   */
  $('.molbf_ul li').eq(0).addClass('onnum');
  /**
   * 页码滚动
   * &pengfanfna
   */
  function yd() {
    $('.molbf_ul li').eq(ipff).addClass('onnum').siblings().removeClass('onnum');
  }
  var ipff = 0;
  $('.btn-prev').click(function() {
    ipff--;
    if(ipff < 0) {
      ipff = $('.molbf_ul li').length - 1;
    }
    yd();
  })
  $('.btn-next').click(function() {
    ipff++;
    if(ipff >= $('.molbf_ul li').length) {
      ipff = 0;
    }
    yd();
  })

  /**
   * 左侧导航的点击效果（给a标签加样式）
   */
  //         $("personal_center_right_list ul li a").on("click",function(){
  //     $(this).addClass("add_a_class").siblings().removeClass("add_a_class");
  //    })

  /**
   * 最近浏览
   */
  $(".recently_viewed_remove").on("click", function() {
    $(this).parents("li").remove();
  });

  /*
   *author: yanan Su
   */

  //支付页面单选框的样式改变
  $(".submitOrder_bd_pay_radioInput").click(function() {
    $(this).css('border', '1px solid #1D76c7');
    $(this).parents('li').siblings().find('.submitOrder_bd_pay_radioInput').css('border', '1px solid rgba(0, 0, 0, 0.15)');
  });
  //积分订单页面单选框的样式改变
  $(".jforder_bd_radioInput").click(function() {
    $(this).addClass('jforder_bd_radioInput_on');
    $(this).parents('li').siblings().find('.jforder_bd_radioInput').removeClass('jforder_bd_radioInput_on');
  });
  //积分订单页面单选框的样式改变
  $(".affirm_bd_radioInput").click(function() {
    $(this).addClass('jforder_bd_radioInput_on');;
    $(this).parents('label').siblings().find('.affirm_bd_radioInput').removeClass('jforder_bd_radioInput_on');;
  });

  //购物车的js
  //全选
  var flag = true;
  $('.shoppingCart_bd_total_all').click(function() {
    var i = 0;
    //点击时，遍历所有商品框是否选中
    $('input[type=checkbox]').each(function() {
      if($(this).is(":checked")) {
        i++;
      }
    })
    if(i == 0) {
      flag = true; //若没有选中，则将flag直接赋值为true
    }
    if(flag) {
      $('input[type=checkbox]').each(function() {
        $('input[type=checkbox]').attr('checked', 'checked');
      })
      flag = false;
    } else {
      $('input[type=checkbox]').removeAttr('checked');
      flag = true;
    }
    a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"))
    shopM();
    totalMoney();
  });
  //批量删除
  $(".shoppingCart_bd_total_del").click(function() {
    $('.shoppingCart_bd_goods_check').each(function() {
      if($(this).is(":checked")) {
        if($(this).parents(".shoppingCart_bd_commodity").find(".shoppingCart_bd_shop_check").is(":checked")) {
          $(this).parents(".shoppingCart_bd_commodity").remove();
          shopMoney();
        }
        $(this).parents(".shoppingCart_bd_goods").remove()
      }
    })
    if($(".shoppingCart_bd_commodity").length == 0) {
      window.location.href = "emptyCar.html";
    }
    a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"))
    totalMoney();
    shopM();
  })

  //当店铺的选择框选中时，店铺内商品前的选择框也都必须选中
  $('.shoppingCart_bd_shop_check').click(function() {
    if($(this).is(":checked")) {
      $(this).parents('.shoppingCart_bd_commodity').find('.shoppingCart_bd_goods_check').attr('checked', 'checked');
    } else {
      $(this).parents('.shoppingCart_bd_commodity').find('.shoppingCart_bd_goods_check').removeAttr('checked');
    }
    a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"))
    totalMoney();
    shopMoney();
  });

  //当店铺内商品选择框全部选中时，那么店铺的选择框也必须选中
  $('.shoppingCart_bd_commodity').each(function() {
    var goodsCheck = $(this).find('.shoppingCart_bd_goods_check');
    goodsCheck.click(function() {
      var num = 0;
      if($(this).is(":checked")) {
        for(var i = 0; i < goodsCheck.length; i++) {
          if(goodsCheck.eq(i).is(":checked")) {
            num++;
          }
        }
        if(goodsCheck.length == num) {
          $(this).parents(".shoppingCart_bd_commodity").find('.shoppingCart_bd_shop_check').attr("checked", "checked");
        }
      } else {
        $(this).parents(".shoppingCart_bd_commodity").find('.shoppingCart_bd_shop_check').removeAttr('checked');
      }
      a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"))
      shopMoney();
      totalMoney();

    })
  });
  //商品删除
  var num_car = 0;
  $('.shoppingCart_bd_goods_op').click(function() {
    if($(this).parents(".shoppingCart_bd_commodity").find(".shoppingCart_bd_goods").size() == 1) {
      $(this).parents(".shoppingCart_bd_commodity").remove();
    }
    $(this).parents(".shoppingCart_bd_goods").remove();
    if($(".shoppingCart_bd_commodity").length == 0) {
      window.location.href = "emptyCar.html";
    }
    var a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"))
    totalMoney();
    shopMoney();
  });

  //计算每个商品小计
  $('.shoppingCart_bd_goods_del').each(function() {
    if($(this).next(".shoppingCart_bd_goods_number").val() == 1) {
      $(this).attr("disabled", "disabled");
    }
  })
  $('.shoppingCart_bd_goods_add').click(function() {
    var goods_num = parseInt($(this).prev(".shoppingCart_bd_goods_number").val()) + 1;
    var goods_price = $(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_price').html().substring(1);
    $(this).prev(".shoppingCart_bd_goods_number").val(goods_num);
    var sum_price = goods_num * parseFloat(goods_price);
    $(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_cal').html("￥" + sum_price)
    if($(this).prev(".shoppingCart_bd_goods_number").val() > 1) {
      $(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_del').removeAttr('disabled');
    }
    var a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"));
    totalMoney();
    shopMoney();
  });
  $('.shoppingCart_bd_goods_del').click(function() {
    var goods_num = parseInt($(this).next(".shoppingCart_bd_goods_number").val()) - 1;
    $(this).next(".shoppingCart_bd_goods_number").val(goods_num);
    var goods_price = $(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_price').html().substring(1);
    var sum_price = goods_num * parseFloat(goods_price);
    $(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_cal').html("￥" + sum_price)
    if($(this).next(".shoppingCart_bd_goods_number").val() == 1) {
      $(this).attr("disabled", "disabled");
    }
    var a = $(".shoppingCart_bd_commodity").index($(this).parents(".shoppingCart_bd_commodity"));
    totalMoney();
    shopMoney();
  });

  function shopMoney() {
    var totalPrice = 0;
    $(".shoppingCart_bd_commodity").eq(a).find('.shoppingCart_bd_goods_check').each(function() {
      if($(this).is(":checked")) {
        var dTotalPrice = parseFloat($(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_cal').html().substring(1));
        totalPrice += dTotalPrice;
      }
    })

    $('.shoppingCart_bd_shop_sum').eq(a).find("span").html("￥" + totalPrice.toFixed(1));
  }

  //  总的结算
  function totalMoney() {
    var totalPrice = 0;
    $('.shoppingCart_bd_goods_check').each(function() {
      if($(this).is(":checked")) {
        var dTotalPrice = parseFloat($(this).parents('.shoppingCart_bd_goods').find('.shoppingCart_bd_goods_cal').html().substring(1));
        totalPrice += dTotalPrice;
      }
    })
    $('.shoppingCart_bd_total_money').find(".shoppingCart_bd_total_sum").html("￥" + totalPrice.toFixed(1));

  }
  //全选、反选、批量删除商品价格计算
  function shopM() {
    $(".shoppingCart_bd_commodity").each(function() {
      var total = 0;
      $(this).find(".shoppingCart_bd_goods").each(function() {
        if($(this).find(".shoppingCart_bd_goods_check").is(":checked")) {
          var dTotalPrice = parseFloat($(this).find('.shoppingCart_bd_goods_cal').html().substring(1));
          total += dTotalPrice;
        }
      })
      $(this).find(".shoppingCart_bd_shop_p").html("￥" + total.toFixed(1));
    })
  }
  //购物车的js
  //积分商城轮播
  for(var i = 0; i < $('.jifenMall_banner_img a').length - 1; i++) {
    $('.jifenMall_banner_oul').append('<li></li>')
  }
  $('.jifenMall_banner_oul li').first().addClass('jifenMall_banner_on');
  $('.jifenMall_banner').hover(function() {
    $('.jifenMall_banner_prev').stop().toggle();
    $('.jifenMall_banner_next').stop().toggle();
  }, function() {
    $('.jifenMall_banner_prev').stop().toggle();
    $('.jifenMall_banner_next').stop().toggle();
  });

  var jf_liw = $('.jifenMall_banner_img a').eq(0).width();
  var jf_lih = $('.jifenMall_banner_img a').eq(0).height();
  var jf_lil = $('.jifenMall_banner_img a').length;
  $('.jifenMall_banner_img').width(jf_lil * jf_liw).height(jf_lih).css("position", "absolute")
  var jf_num = 0;
  //设置一个行动函数
  function jf_move() {
    $('.jifenMall_banner_img').stop().animate({
      left: -jf_liw * jf_num + "px"
    }, 500);
    $('.jifenMall_banner_oul li').eq(jf_num).addClass('jifenMall_banner_on').siblings().removeClass('jifenMall_banner_on');
  }
  //next点击事件
  $('.jifenMall_banner_next').click(function() {
    jf_num++;
    //判断num当他大于要求轮播的最后一张图时也就是倒数第二张，给box设left回最左，并让num赋值为1，下一张变为第二张图；
    if(jf_num > jf_lil - 1) {
      $('.jifenMall_banner_img').css("left", "0px");
      jf_num = 1;
    }
    jf_move();
    //当视觉上是第一张，实际上是最后一张的时候，将一个小圆点设为on样式
    if(jf_num == jf_lil - 1) {
      $('.jifenMall_banner_oul li').eq(0).addClass('jifenMall_banner_on').siblings().removeClass('jifenMall_banner_on');
    }
  });
  //prev点击事件
  $('.jifenMall_banner_prev').click(function() {
    jf_num--;
    //当num小于零改变css样式left等于我的图片个数乘以宽度；并让num变成倒数第二张图，也就是轮播要求的最后一张图
    if(jf_num < 0) {
      $('.jifenMall_banner_img').css('left', -(jf_lil - 1) * jf_liw);
      jf_num = jf_lil - 2;
    }
    jf_move();
  });
  //小圆点点击事件
  $('.jifenMall_banner_oul li').click(function() {
    jf_num = $(this).index();
    jf_move();
  })
  //定时器
  var jf_timer = setInterval(function() {
    jf_num++;
    if(jf_num > jf_lil - 1) {
      $('.jifenMall_banner_img').css("left", "0px");
      jf_num = 1;
    }
    jf_move();
    if(jf_num == jf_lil - 1) {
      $('.jifenMall_banner_oul li').eq(0).addClass('jifenMall_banner_on').siblings().removeClass('jifenMall_banner_on');
    }
  },2000)
  $('.jifenMall_banner').hover(function() {
    clearInterval(jf_timer)
  }, function() {
    jf_timer = setInterval(function() {
      jf_num++;
      if(jf_num > jf_lil - 1) {
        $('.jifenMall_banner_img').css("left", "0px");
        jf_num = 1;
      }
      jf_move();
      if(jf_num == jf_lil - 1) {
        $('.jifenMall_banner_oul li').eq(0).addClass('jifenMall_banner_on').siblings().removeClass('jifenMall_banner_on');
      }
    }, 1800)
  });
  //确认订单修改日期

  $('.modification_time_box_amend_bth').click(function() {
    $(this).parents('.modification_time_box').find('.modification_time_box_ul2_hover').show();
  })

  $('#modification_time_box_confirm').click(function() {
    $(this).parents('.modification_time_box').find('.modification_time_box_ul2_hover').hide();
  })

  $('#modification_time_box_cancel').click(function() {
    $(this).parents('.modification_time_box').find('.modification_time_change').html("12:00~3:00");
  })

  $('.modification_time_box_ul2 li').click(function() {
    $(this).parents('.modification_time_box').find('.modification_time_change').html($(this).html());
  });

  //充值支付弹窗
  $(".payment_bd_Pics_pay").click(function() {
    layer.open({
      skin: 'payment_new',
      title: false,
      content: $(".payment_lay").html(),
      area: ["656px", "442px"],
      btn: ['已经完成支付<span>查看订单详情</span>', '支付失败<span>更换支付方式</span>'],
      btnAlign: 'c',
      yes: function(index, layero) {
        //按钮【按钮一】的回调
        window.location.href = 'paysuccess.html'
      },
      btn2: function(index, layero) {
        //按钮【按钮二】的回调
        //return false 开启该代码可禁止点击该按钮关闭
      },
    });
  });
  //确认订单信息页面计算金额
  $('.affirm_bd_goods_del').each(function() {
    if($(this).next(".affirm_bd_goods_number").val() == 1) {
      $(this).attr("disabled", "disabled");
    }
  })

  $('.affirm_bd_goods_add').click(function() {
    var goods_num = parseInt($(this).prev(".affirm_bd_goods_number").val()) + 1;
    var goods_price = $(this).parents('.affirm_bd_goods').find('.affirm_bd_goods_price').html().substring(1);

    $(this).prev(".affirm_bd_goods_number").val(goods_num);
    var sum_price = goods_num * parseFloat(goods_price);
    $(this).parents('.affirm_bd_goods').find('.affirm_bd_goods_cal').html("￥" + sum_price)
    if($(this).prev(".affirm_bd_goods_number").val() > 1) {
      $(this).parents('.affirm_bd_goods').find('.affirm_bd_goods_del').removeAttr('disabled');
    }
    b = $(".affirm_bd_commodity").index($(this).parents(".affirm_bd_commodity"));
    aftolMoney();

  });

  $('.affirm_bd_goods_del').click(function() {
    var goods_num = parseInt($(this).next(".affirm_bd_goods_number").val()) - 1;
    $(this).next(".affirm_bd_goods_number").val(goods_num);
    var goods_price = $(this).parents('.affirm_bd_goods').find('.affirm_bd_goods_price').html().substring(1);
    var sum_price = goods_num * parseFloat(goods_price);
    $(this).parents('.affirm_bd_goods').find('.affirm_bd_goods_cal').html("￥" + sum_price)
    if($(this).next(".affirm_bd_goods_number").val() == 1) {
      $(this).attr("disabled", "disabled");
    };
    b = $(".affirm_bd_commodity").index($(this).parents(".affirm_bd_commodity"));
    aftolMoney();
  });
  //总的结算
  function aftolMoney() {
    var allprice = 0; //总价
    $(".affirm_bd_commodity").each(function() {
      var totalPrice = 0;
      $(".affirm_bd_commodity").eq(b).find('.affirm_bd_goods').each(function() {
        var dTotalPrice = parseFloat($(this).find('.affirm_bd_goods_cal').html().substring(1));
        totalPrice += dTotalPrice;

        $(".affirm_bd_commodity").eq(b).find(".affirm_bd_sp").html("￥" + totalPrice.toFixed(1));
        var yunfei = parseFloat($('.affirm_bd_yunfei').html().substring(1));
        var heji = totalPrice + yunfei;
        $(".affirm_bd_commodity").eq(b).find(".affirm_bd_hj").html("￥" + heji.toFixed(1));
      });
      var oneprice = parseFloat($(this).find(".affirm_bd_hj").html().substring(1)); //得到每个店铺的总价
      allprice += oneprice;
    })
    $('.jforder_bd_toljf').html("￥" + allprice.toFixed(1))
  }
  //确认订单信息页面计算金额

  //设置默认地址
  $('.jforder_bd_add li').first().find('.jforder_bd_radioInput').addClass('jforder_bd_radioInput_on');
  $('.jforder_bd_add li').first().find('.jforder_bd_radio').attr('checked', 'checked');
  $('.jforder_bd_site a').first().hide().siblings().show();
  $('.jforder_bd_add li').first().find('.jforder_bd_label').append('<span class="jforder_bd_smallspan">默认地址  </span>');
  //设置第一个地址的样式函数
  function jfdefault() {
    $('.jforder_bd_add li').first().find('.jforder_bd_radio').attr('checked', 'checked');
    $('.jforder_bd_add li').first().siblings().find('.jforder_bd_radio').removeAttr('checked');
    $('.jforder_bd_add li').first().find('.jforder_bd_radioInput').addClass('jforder_bd_radioInput_on');
    $('.jforder_bd_add li').first().find('.jforder_bd_label').append('<span class="jforder_bd_smallspan">默认地址  </span>');
    $('.jforder_bd_add li').first().siblings().find('.jforder_bd_radioInput').removeClass('jforder_bd_radioInput_on');
    $('.jforder_bd_add li').first().siblings().find('.jforder_bd_smallspan').remove();
    $('.jforder_bd_add li').first().find('.jforder_bd_site_set').hide();
    $('.jforder_bd_add li').first().siblings().find('.jforder_bd_site_set').show();
  }

  //设置默认地址的点击事件
  $('.jforder_bd_site_set').live('click', function() {
    var jforder_con = $(this).parents('li').html();
    $(this).parents('ul').prepend('<li >' + jforder_con + '</li>');
    $(this).parents('li').remove();
    jfdefault();
  });
  //删除
  $('.jforder_bd_del').live('click', function() {
    $(this).parents('li').remove();
  });
  //展开地址的点击事件
  $('.jforder_bd_add li').eq(3).nextAll().hide();
  $('.jforder_bd_add_flex_open').click(function() {
    $(this).hide().next().show();
    $('.jforder_bd_add li').slideDown();
  });
  //收起地址的点击事件
  $('.jforder_bd_add_flex_close').click(function() {
    $(this).hide().prev().show();
    $('.jforder_bd_add li').eq(0).nextAll().slideUp();
  });
  //积分商城确认订单页面计算金额
  $('.jforder_bd_goods_del').each(function() {
    if($(this).next(".jforder_bd_goods_number").val() == 1) {
      $(this).attr("disabled", "disabled");
    }
  })
  $('.jforder_bd_goods_add').click(function() {
    var goods_num = parseInt($(this).prev(".jforder_bd_goods_number").val()) + 1;

    $(this).prev(".jforder_bd_goods_number").val(goods_num);
    var sum_price = goods_num * 60;
    $(this).parents('.jforder_bd_goods').find('.jforder_bd_goods_cal').html(sum_price + "积分")
    if($(this).prev(".jforder_bd_goods_number").val() > 1) {
      $(this).parents('.jforder_bd_goods').find('.jforder_bd_goods_del').removeAttr('disabled');
    }
    aforderMoney();
  });
  $('.jforder_bd_goods_del').click(function() {
    var goods_num = parseInt($(this).next(".jforder_bd_goods_number").val()) - 1;
    $(this).next(".jforder_bd_goods_number").val(goods_num);
    var sum_price = goods_num * 60;
    $(this).parents('.jforder_bd_goods').find('.jforder_bd_goods_cal').html(sum_price + "积分")
    if($(this).next(".jforder_bd_goods_number").val() == 1) {
      $(this).attr("disabled", "disabled");
    }
    aforderMoney();
  });

  //  总的结算
  function aforderMoney() {

    var totalPrice = 0;
    $('.jforder_bd_goods_cal').each(function() {
      var afol = $(this).html().length;
      var dTotalPrice = parseFloat($(this).html().substring(0, afol - 2));
      totalPrice += dTotalPrice;
    })
    $('.jforder_bd_toljf').html(totalPrice + '积分');
  };
  //确认订单信息页面计算金额
  //备注输入45个字
  $('.jforder_bd_limit').keyup(function() {
    var remark = $(this).val().length;
    var remark_index = $('.jforder_bd_limit').index(this);
    if(remark >= 45) {
      $(this).next().show();
      $('.jforder_bd_limit').eq(remark_index).val($('.jforder_bd_limit').eq(remark_index).val().substring(0, 45))
    } else {
      $(this).next().hide();
    }
  });
  $('.noneads_bd_limit').keyup(function() {
    var remark = $(this).val().length;
    var remark_index = $('.noneads_bd_limit').index(this);
    if(remark >= 45) {
      $(this).next().show();
      $('.noneads_bd_limit').eq(remark_index).val($('.noneads_bd_limit').eq(remark_index).val().substring(0, 45))
    } else {
      $(this).next().hide();
    }
  });
  $('.affirm_bd_limit').keyup(function() {
    var remark = $(this).val().length;
    var remark_index = $('.affirm_bd_limit').index(this);
    if(remark >= 45) {
      $(this).next().show();
      $('.affirm_bd_limit').eq(remark_index).val($('.affirm_bd_limit').eq(remark_index).val().substring(0, 45))
    } else {
      $(this).next().hide();
    }
  });
  //确认订单信息手机验证
  $(".noneads_tel1_yz").blur(function() {

    var noneads_iphone_num = $(this).val();
    var reg1 = /^1(3[0-9]|4[5|7]|5[0|2|3|1|5|6|7|8|9]|7[1|7]|8[0-9])\d{8}$/
    if(reg1.test(noneads_iphone_num)) {
      $('.noneads_address_errorr1').html("手机号码正确").css({
        'color': '#498e3d',
        'fontSize': '14px'
      });
    } else {
      $('.noneads_address_errorr1').html("请输入正确的手机号码").css({
        'color': 'red',
        'fontSize': '14px'
      });
    }
  });
  $(".noneads_tel2_yz").blur(function() {
    var tel = $(this).val();
    var reg1 = /^\d{3,4}$/
    if(reg1.test(tel)) {
      $('.noneads_address_errorr2').html("").css({
        'color': '#498e3d',
        'fontSize': '14px'
      });
    } else {
      $('.noneads_address_errorr2').html("请输入正确的区号").css({
        'color': 'red',
        'fontSize': '14px'
      });
    }
  });
  $(".noneads_tel3_yz").blur(function() {
    var tel = $(this).val();
    var reg1 = /^\d{7,8}$/
    if(reg1.test(tel)) {
      $('.noneads_address_errorr3').html("电话号码正确");
    } else {
      $('.noneads_address_errorr3').html("请输入正确的电话号码").css({
        'color': 'red',
        'fontSize': '14px'
      });
    }

  });
   $(".affirm_bd_ps").click(function(){
          layer.open({
            skin:"syn_big_tanchu",
          type: 1,
          title: false,
          content: $('.syn_big_tanchucheng1_limian'),
          area:["687px","454px"],
          
          btn: ['返回购物车修改', '修改配送区域'],
          btnAlign: 'c',
          yes: function(index, layero) {
            //按钮【按钮一】的回调
            window.location.href="shoppingCart.html";
          },
          btn2: function(index, layero) {
            //按钮【按钮二】的回调
            window.location.href="";
            return false //开启该代码可禁止点击该按钮关闭
          }
        });
       });
   $(".jforder_bd_xiugai").click(function(){
          layer.open({
          skin:'my_area',
          type: 1,
          title: false,
          content: $('.syn_add_new_address_body'),
          area:["687px","454px"],
          btn: ['返回', '保存'],
          btnAlign: 'c',
          yes: function(index, layero) {
            //按钮【按钮一】的回调
            window.location.href="";
          },
          btn2: function(index, layero) {
            //按钮【按钮二】的回调
            window.location.href="";
            return false //开启该代码可禁止点击该按钮关闭
          }
        });
       });
})