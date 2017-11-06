$(function(){
	//慧游赤壁
	 $('.hyTitlePara .spanLine').css('width',($('.hyTitlePara .t1').width() - $('.hyTitlePara .sTxt').width())/2 - 10);
	//页面滑动   导航滑动
	var hyNavTop = $('#hyNav').position().top;
	var hyNavHeight = $('#hyNav').height();
	var hyNavFixHeight;
	var reduceHeight;
	var guchengTop =  $('#gucheng').position().top;
	var gonglueTop = $('#gonglue').position().top;
	var wenhuaTop = $('#wenhua').position().top;
	var shipinTop = $('#shipin').position().top;
	var gengduoTop = $('#gengduo').position().top;

	$(window).scroll(function(){
		hyNavFixHeight = $('.hyNavFix').height();

		if($(window).scrollTop() >= hyNavTop){
			$('#hyNav').addClass('hyNavFix');
			$('.hySlideBox').css('margin-bottom','5.5rem');

			reduceHeight = hyNavHeight + parseInt($('.hySlideBox').css('margin-bottom'));

			//滚动帧测
			if($(window).scrollTop() > guchengTop - reduceHeight){
				$('.hyNavFix').find('li').removeClass('on');
				$('.hyNavFix li:first').addClass('on');
			}

			if($(window).scrollTop() > gonglueTop - reduceHeight){
				$('.hyNavFix').find('li').removeClass('on');
				$('.hyNavFix li').eq(1).addClass('on');
			}

			if($(window).scrollTop() > wenhuaTop - reduceHeight){
				$('.hyNavFix').find('li').removeClass('on');
				$('.hyNavFix li').eq(2).addClass('on');
			}

			if($(window).scrollTop() > shipinTop - reduceHeight){
				$('.hyNavFix').find('li').removeClass('on');
				$('.hyNavFix li').eq(3).addClass('on');
			}

			if($(window).scrollTop() > gengduoTop - reduceHeight){
				$('.hyNavFix').find('li').removeClass('on');
				$('.hyNavFix li:last').addClass('on');
			}

		}else{
			$('#hyNav').removeClass('hyNavFix');
			$('.hySlideBox').css('margin-bottom','0');
		}
	});

	//页内锚点链接
	$('#hyNav').on('click','li:first',function(){
		$("html,body").animate({scrollTop:guchengTop - hyNavHeight},600);
	});
	$('#hyNav').on('click','li:eq(1)',function(){
		$("html,body").animate({scrollTop:gonglueTop - hyNavHeight},600);
	});
	$('#hyNav').on('click','li:eq(2)',function(){
		$("html,body").animate({scrollTop:wenhuaTop - hyNavHeight},600);
	});
	$('#hyNav').on('click','li:eq(3)',function(){
		$("html,body").animate({scrollTop:shipinTop - hyNavHeight},600);
	});
	$('#hyNav').on('click','li:last',function(){
		$("html,body").animate({scrollTop:gengduoTop - hyNavHeight},600);
	});

});