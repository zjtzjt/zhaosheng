
	$(function(){
			$(".rmzy").mouseenter(function(){ //当鼠标指针穿过rmzy区域时，该元素盒子隐藏，热门专业列表区域显示
				$('.rmzy').hide();
				$('.professionals').show();	
			});	
			$(".professionals").mouseleave(function(){ //当鼠标指针离开热门专业列表区域时，该元素盒子隐藏，rmzy区域显示
				$('.professionals').hide();	
				$('.rmzy').show();	
			});	
		});
	
	$(function(){
		$(".livea").hover(function(){
			$(this).find(".livs").show();
		},function(){
			$(this).find(".livs").hide()	
		})	
	});

//骞荤伅鐗噅s
var id = 0;
var j = 0;
jQuery(".index_focus").hover(function(){
jQuery(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1);
},function(){
jQuery(this).find(".index_focus_pre,.index_focus_next").fadeOut();
});
jQuery(".index_focus").slide({
titCell: ".slide_showcase a ",
mainCell: ".bg ul",
delayTime: 500,
interTime: 3500,
prevCell:".index_focus_pre",
nextCell:".index_focus_next",
effect: "fold",
autoPlay: true,
trigger: "click",
startFun:function(i){
	$('.do').find("div").eq(j).hide();
	$('.do').find("div").eq(i).show();
	j = i;
	jQuery(".index_focus_info").eq(i).find("h3").css("display","block").fadeTo(1000,1);
	jQuery(".index_focus_info").eq(i).find(".text").css("display","block").fadeTo(1000,1);
}
});


 //鏂伴椈璧勮鍒囨崲
$(function() {
        var len = $('.news_item dl').length,
        ulwidth = $(".news_item dl").width(),
        $parent = $(".news_item"),
        s=null,
        n=1;
        $('.news .title p strong').html('/'+len);
        $('.news_item').width(1200);
        //鍚戝彸 鎸夐挳

        if (len > 1) {
            function moveto(d){
                   n= n>len ? 1:n;
                   n= n<=0 ? len:n;
                $('.news .title p b').html(n);
                if(d){
                    if (!$parent.is(":animated")) {
                        $parent.animate({
                            marginLeft: -ulwidth + "px"
                        }, "2000", function() {
                            $parent.css({
                                marginLeft: 0
                            }).find("dl:first").appendTo($parent); //appendTo鐩存帴绉诲姩鍏冪礌
                        })
                    }
                }else{
                    if (!$parent.is(":animated")) {
                        $parent.css({
                            marginLeft: -ulwidth + "px"
                        }).find("dl:last").prependTo($parent);
                        $parent.animate({
                            marginLeft: 0
                        }, "2000");
                    }
            
                }
            }
            $("#inbr2").click(function() {
                n++;
                moveto(true);
            });
            $("#inbl2").click(function() {
                n--;
               moveto(false);
               });
              /* s=setInterval(function(){
                   n++;
                   moveto(true);
               },2000)*/
               $('.news_item').add('#inbl2').add('#inbr2').hover(function(){
                       clearInterval(s);
               },function(){
                  /* s=setInterval(function(){
                   n++;
                   moveto(true);
               },2000);*/
               });
        }
    });
    
    //鍖楀ぇ浜哄瘎璇�
    
$(function() {
        var len = $('.stustyle_item dl').length,
        ulwidth = $(".stustyle_item dl").width(),
        $parent = $(".stustyle_item"),
        s=null,
        n=1;
        $('.stustyle .title p strong').html('/'+len);
        $('.stustyle_item').width(1200);
        //鍚戝彸 鎸夐挳

        if (len > 1) {
            function moveto(d){
                   n= n>len ? 1:n;
                   n= n<=0 ? len:n;
                $('.stustyle .title p b').html(n);
                if(d){
                    if (!$parent.is(":animated")) {
                        $parent.animate({
                            marginLeft: -ulwidth + "px"
                        }, "3000", function() {
                            $parent.css({
                                marginLeft: 0
                            }).find("dl:first").appendTo($parent); //appendTo鐩存帴绉诲姩鍏冪礌
                        })
                    }
                }else{
                    if (!$parent.is(":animated")) {
                        $parent.css({
                            marginLeft: -ulwidth + "px"
                        }).find("dl:last").prependTo($parent);
                        $parent.animate({
                            marginLeft: 0
                        }, "3000");
                    }
            
                }
            }
            $("#inbr1").click(function() {
                n++;
                moveto(true);
            });
            $("#inbl1").click(function() {
                n--;
               moveto(false);
               });
              /* s=setInterval(function(){
                   n++;
                   moveto(true);
               },3000)*/
               $('.stustyle_item').add('#inbl2').add('#inbr2').hover(function(){
                       clearInterval(s);
               },function(){
                 /*  s=setInterval(function(){
                   n++;
                   moveto(true);
               },3000);*/
               })
        }
    });
    
  //瑙嗛
var length = $('.conbox').find('div').length;   
    var flag = 2;
    function auto(){
          
        for(var i=1;i<=length;i++){
            
            $('#sp'+i).hide();
            $('#a'+i).attr('class','');
            }
                if(flag>length) flag=1;
        $('#sp'+flag).show();
        $('#a'+flag).attr('class','cur');
        flag++;
        
        }
    t = setInterval("auto()", 4000); 
    
    $('.switcher a').mousemove(function(){
     flag = $(this).attr('value');
     auto();
     clearInterval(t);
    
   });

$('.switcher').hover(function(){},function(){

   t = setInterval("auto()", 4000); 
   });

	
	

