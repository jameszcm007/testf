$(function(){
	//手机商城hover效果
	var $mob_shopping=$(".mob_shopping");
	var $mob_shoppingApp=$(".mob_shoppingApp");
	$mob_shopping.hover(function(){
		$(this).find($mob_shoppingApp).css({display:"block"});
	},function(){
		$(this).find($mob_shoppingApp).css({display:"none"});
	})
	
	
	//banner图效果
	var $banner=$(".banner");
	var $imgs=$(".banner_p a");
	var $left=$(".left");
	var $right=$(".right");
	var $banner_btn=$(".banner_btn span");
	var k=0;
	var timer=setInterval(ban,3000);
	
	$banner_btn.click(function(){
					clearInterval(timer);
					k=$(this).index();
					plays(k);
					timer=setInterval(ban,3000);
				})
	$banner.hover(function(){
					clearInterval(timer);
					$left.show();
					$right.show();
				},function(){
					$left.hide();
					$right.hide();
					timer=setInterval(ban,3000);
				});
				
				$left.click(function(){
					k--;
					if(k==-1){
						k=$imgs.size()-1;
						
					}
					plays(k);
				});
				$right.click(ban);
	
	function ban(){
					k++;
					if(k==$imgs.size()){
						k=0;
					}
					plays(k);
				}
	function plays(k){
		$imgs.eq(k).animate({opacity:1},500).siblings().animate({opacity:0},500);
		$banner_btn.eq(k).css({background:"red",opacity:0.3}).siblings().css({background:"black",opacity:0.3});
	}
})
