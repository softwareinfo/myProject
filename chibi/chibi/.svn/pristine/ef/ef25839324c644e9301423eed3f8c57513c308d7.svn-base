$(function(){
	// 指导页
	$('#guid').one('click',function(){
		$(this).hide();
		$('.maskBg').show();
		$('#mask').show();
	});

	//若录音未开启，点击录音按钮弹出弹窗
	var isRecord = true;
	$('#touch_area').click(function(){
		if(isRecord){
			$('.keyWarp').hide();
			$('.lookWarp').hide();
			$('.look').find('p').html('随便看看');
			$('.recordWarp').show();
		}else{
			$('.maskBg').show();
			$('#mask').show();
		}
	});

	//长按录音
	var timeOutEvent=0; 
	$('#touch_area').on({  
        touchstart: function(e){  
        	audio1.pause();
            timeOutEvent = setTimeout("longPress()",500);  
            e.preventDefault(); 
            //按下按钮状态
            $("#record").attr('src','images/audioBgActive.png');

            //录音时按状态
            $("#record").attr('src','images/xz.png').addClass('rotate');
    		$("#record").siblings('.record-txt').show();     
        },  
        touchmove: function(){  
            clearTimeout(timeOutEvent);   
            timeOutEvent = 0;   
        },  
        touchend: function(){  
            clearTimeout(timeOutEvent);  
            if(timeOutEvent!=0){  
            	audio1.play(); 
            	// 恢复默认状态
            	$("#record").attr('src','images/audiobg.png').removeClass('rotate');
            	$("#record").siblings('.record-txt').hide();
                alert("是长按开始录音哟~");   
            }   
            return false;   
        }  
    });

	var audio1 = document.getElementById('audio');

	// 弹窗是否按钮操作
	$('#mask .btnGroup').on('click','a:first',function(){
		isRecord = false;
		$('.maskBg').hide();
		$('#mask').hide();
		$('.recordWarp').show();
	});
	$('#mask .btnGroup').on('click','a:last',function(){
		isRecord = true;
		$('.maskBg').hide();
		$('#mask').hide();
		$('.recordWarp').show();
		audio1.play();
	});

	// 键盘输入
	var bKeyInp = true;
	$('#nav_inner').on('click','.keyInpBtn',function(){
		if(bKeyInp){
			$('.xiaoqImg').hide();
			$('.recordWarp').hide();
			$('.voiceInp').find('img').removeClass('record');
			$('.voiceInp img').addClass('disable');
			$('.keyWarp').show();
			audio1.pause();
			bKeyInp = false;
		}else{
			$('.xiaoqImg').show();
			$('.keyWarp').hide();
			$('.lookWarp').hide();
			$('.voiceInp img').removeClass('disable');
			$('.voiceInp').find('img').addClass('record');
			$('.recordWarp').show();
			audio1.play();
			bKeyInp = true;
		}
		return false;
	});

	$('.keyWarp').on('click','.close',function(){
		$('.xiaoqImg').show();
		$('.keyWarp').hide();
		$('.recordWarp').show();
		$('.voiceInp').find('img').addClass('record');
		$('.voiceInp img').removeClass('disable');
		audio1.play();
		return false;
	});

	$('.keyWarp').on('click','.subBtn',function(){
		var inpVal = $('.keyWarp .inp').val();
		console.log(inpVal);
		if(inpVal == '' || inpVal == undefined){
			$('.error').show();
			setTimeout(function(){
				$('.error').hide();
			},2000);
		}else{
			$('.xiaoqImg').show();
			$('.keyWarp').hide();
			$('.recordWarp').show();
			$('.keyWarp .inp').val('');
			$('.voiceInp').find('img').addClass('record');
			$('.voiceInp img').removeClass('disable');
			$('.look').find('p').html('随便看看');

			var arr =['赤壁','赤壁古战场'];
			if(in_array(arr,inpVal)){
				$('#audio_btn').text('文字内容与我无关');
				$('.recordWarp .xiaoq .txt').find('p').html('哎呦，这个问题可把我难住了，试着问问其他的问题吧！如果不知道问什么，点击右下方随便看看发现惊喜.');
				$('.recordWarp .more').css('visibility','hidden');
			}else{
				$('#audio_btn').html(inpVal);
				$('.recordWarp .xiaoq .txt').find('p').html('赫赫有名的赤壁大战，是以少胜多，以弱胜强的终极典范，您还不快来古战场遗址借东风，您还不快来古战场遗址借...');
				$('.recordWarp .more').css('visibility','visible');
				$('.recordWarp .more').attr('href','viewDetail1.html');
			}

			audio1.play();
		}
		return false;
	});

	//随便看看
	var isLook = true;
	$('.look').on('click',function(){
		if(isLook){
			$('.xiaoqImg').hide();
			audio1.pause();
			$('.keyWarp').hide();
			$('.keyInp').removeClass('keyInpBtn').addClass('disable');
			$('.recordWarp').hide();
			$('.voiceInp').find('img').addClass('record');
			$('.voiceInp img').removeClass('disable');
			$('.look').find('p').html('关闭');
			$('.lookWarp').show();
			isLook = false;
			return false;
		}else{
			$('.xiaoqImg').show();
			$('.look').find('p').html('随便看看');
			$('.lookWarp').hide();
			$('.keyWarp').hide();
			$('.keyInp').addClass('keyInpBtn').removeClass('disable');
			$('.recordWarp').show();
			audio1.play();
			isLook = true;
			return false;
		}
		
	});

	//标签    
	tagMove('myCanvas1','tags1');
	$('#list li').each(function(i){
		$(this).on('click',function(){
			$('#list li').removeClass('active');
			$('.listTxtBox').hide();

			$(this).addClass('active');
			$('.listTxtBox').eq($(this).index()).show();
			var canvasId = $('.listTxtBox').eq($(this).index()).find('canvas').attr('id');
			var tagId = $('.listTxtBox').eq($(this).index()).find('.listTxt').attr('id');
			tagMove(canvasId,tagId)
		});
	});

	$('.listTxt').on('click','a',function(){
		var inpVal = $(this).text();
		$('.lookWarp').hide();
		$('.keyWarp').hide();
		$('.keyInp').addClass('keyInpBtn').removeClass('disable');
		$('.recordWarp').show();
		$('#audio_btn').html(inpVal);
		$('.recordWarp .more').css('visibility','visible');
	});

	//页面跳转判断
	// var arr =['赤壁','赤壁古战场'];
	// $('#more').on('click',function(){
	// 	var pVal = $('#audio_btn').text();
	
	// 	if(in_array(arr,'pVal')){
	// 		$('#audio_btn').text('文字内容与我无关');
	// 		$('.recordWarp .xiaoq .txt').find('p').html('哎呦，这个问题可把我难住了，试着问问其他的问题吧！如果不知道问什么，点击右下方随便看看发现惊喜.');
	// 		$('#more').css('visibility','hidden');
	// 	}else{
	// 		window.location.href = 'viewDetail1.html';//填写需要跳转的页面
	// 	}
	// });

	//慧游赤壁	下拉框
	$('#sltWarp .sltMenu').on('click','li:first',function(){
		if($('#sltWarp .sltMenu li:last').hasClass('on')){
			$('#sltWarp .sltMenu li:last').removeClass('on');
			$('#sltWarp').find('.sltSubMenu').hide();
			$(this).addClass('on');
			$('#sltWarp').find('.sltSubMenu').slideDown();
		}else{
			if($(this).hasClass('on')){
				$(this).removeClass('on');
				$('#sltWarp').find('.sltSubMenu').slideUp();
			}else{
				$(this).addClass('on');
				$('#sltWarp').find('.sltSubMenu').slideDown();
			}
		}
	});
	$('#sltWarp .sltMenu').on('click','li:last',function(){
		if($('#sltWarp .sltMenu li:first').hasClass('on')){
			$('#sltWarp .sltMenu li:first').removeClass('on');
			$('#sltWarp').find('.sltSubMenu').hide();
			$(this).addClass('on');
			$('#sltWarp').find('.sltSubMenu').slideDown();
		}else{
			if($(this).hasClass('on')){
				$(this).removeClass('on');
				$('#sltWarp').find('.sltSubMenu').slideUp();
			}else{
				$(this).addClass('on');
				$('#sltWarp').find('.sltSubMenu').slideDown();
			}
		}
		
	});

	// $('#sltWarp .sltMenu').on('click','li',function(){
	// 	$('#sltWarp .sltMenu li').removeClass('on');
	// 	$(this).addClass('on');
	// 	$('#sltWarp').find('.sltSubMenu').slideUp();
	// });

});

//长按操作
function longPress(){   
	timeOutEvent = 0;   
	alert("长按开始录音触发");   
} 

//匹配字符串
function in_array(a, v) {
  var i;
  for (i = 0; i < a.length; i++) {
    if (v === a[i]) {
      return i;
    }
  }
  return -1;
} // 返回-1表示没找到，返回其他值表示找到的索引

function tagMove(canvasId,tagId){
	try {
		var i, et = document.getElementById(tagId).childNodes;
		for (i in et) {
			et[i].nodeName == 'A' && et[i].addEventListener('click', function (e) {
				e.preventDefault();
			});
		}

		TagCanvas.Start(canvasId, tagId, {
			textColour: '#fd9149',
			outlineColour: 'transparent',
			reverse: true,
			depth: 0.8,
			dragControl: true,
			decel:0.95,
			maxSpeed: 0.05,
			initial: [-0.2, 0]
		});
	} catch (e) {
		// something went wrong, hide the canvas container
		//document.getElementById('myCanvasContainer').style.display = 'none';
	}
}