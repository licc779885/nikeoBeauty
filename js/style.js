$(function(){
	//顶部导航
	$(".nav ul li a").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().children("a").removeClass("active");
	});
	//顶部下拉导航
	$(".nav .drop_down li a").click(function(){
		$(this).addClass("cef");
		$(this).parent().siblings().children("a").removeClass("cef")
	});
	//顶部下拉导航点击显示
	$(".nav .more").toggle(function(){
		$(".nav .drop_down").slideDown();
		$(".nav .list ul").hide();
		$(".nav .list i").show();
		$(".nav_beij").show();
		$(this).css("transform","rotate(-180deg)");
	},function(){
		$(".nav .drop_down").slideUp();
		$(".nav .list ul").show();
		$(".nav .list i").hide();
		$(".nav_beij").hide();
		$(this).css("transform","rotate(0deg)")
	});
	//底部导航
	$(".foot li").click(function(){
	 $(this).addClass("active").siblings().removeClass("active");
	});
	//返回顶部
	$('#back_top').hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() >200) {
			$('#back_top').fadeIn(400);//当滑动栏向下滑动时，按钮渐现的时间
		} else {
			$('#back_top').fadeOut(0);//当页面回到顶部第一屏时，按钮渐隐的时间
		}
	});
	$("#back_top").click(function(){
	  $("html,body").animate({scrollTop:"0"},300)
	});
	//新品上线
	$(".hd_new_menu li,.red_menu a").bind("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	//其她买家秀
//	$(".menu a img").click(function(){
//	  $(this).parent().css("border-color","#FF5252");
//	  $(this).parent().siblings().css("border-color","#D5CFCF")
//	  var c = $(this).parents(".box").siblings(".top").children("a");
//	  c.children("img").hide();
//	  $(this).clone().appendTo(c);
//	});
	$(".menu a img").click(function(){
		  $(this).parent().css("border-color","#FF5252");
		  $(this).parent().siblings().css("border-color","#D5CFCF")
		  var timg = $(this).attr("src");
		  var bimg = $(this).parents(".box").siblings(".top").children("a").children("img");
		  bimg.attr("src",timg)
		});
	//新手学堂
	$(".new_list li .title").toggle(function(){
	  $(this).siblings(".text").show();
	  $(this).css("color","#EF4848");
	  $(this).siblings("i").css("-webkit-transform","rotate(135deg)");
	},function(){
	  $(this).siblings(".text").hide();
	  $(this).css("color","#484647");
	  $(this).siblings("i").css("-webkit-transform","rotate(45deg)");
	});
	//点击头部信息按钮
	$(".hd_title .info").click(function(){
	  $(".info_text").toggleClass("show");
	});
	$(".hd_title .fenx").click(function(){
	  $("#fenx,.nav_beij").toggleClass("show");
	});
	$("#fenx .qux").click(function(){
		$("#fenx,.nav_beij").removeClass("show")
	});
	//首单弹窗关闭
	$(".first_cz,.first_close img").bind("click",function(){
		$("#first").hide();
	});
	//tab
	$(".fenl_top .menu a").click(function(){
	  $(this).addClass("active");
	  $(this).siblings().removeClass("active");
	  var index=$(".fenl_top .menu a").index(this);
	  $(".com").hide();
	  $(".com").eq(index).show();
	});
	$(".car i.it").toggle(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	});
	//设置默认地址
	$(".address_form .mren").click(function(){
		if($(".address_form .mren").hasClass("active")){
			$(".address_form .mren").removeClass("active")
		}else{
			$(".address_form .mren").addClass("active")
		}
	});
	$(".address div.add").click(function(){
		$(".address_tanc").show()
	});
	$(".address_tanc .text .close,.tanc_beij,.address_tanc .rem a").click(function(){
		$(".address_tanc").hide()
	});
	$(".pjt_dom li.active i").click(function(){
		$(this).parents("li").hide();
	});
	$(".car_info_top .list a.lt").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(".car_info_top .list a.lt").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".car_info_top i").click(function(){
		$(".car_info,.nav_beij").hide();
	});
	$(".foot a.btn_shop").click(function(){
		$(".car_info,.nav_beij").show();
	})
})
