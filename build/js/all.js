$(document).on('ready',function(){


	$('#page1,#page2').css('height',$(window).height());

	setTimeout(function(){
		$('.ability').addClass('visible');
	},500);

	setTimeout(function(){
		$('.circle').addClass('visible');

		setTimeout(function(){
			$('.circle').removeClass('active').addClass('visible2');
		},500);

		var ir={

			top: 	$('.label').offset().top-50, 
			left: 	$('.label').offset().left-50
		}

		$('.ability').css({
			left: ir.left,
			top: ir.top,
			opacity:0
		});

		setTimeout(function(){
			$('.ability').appendTo('.ci').css({left:'40%',top:'40%'});
			$('#page1 h1.title').slideDown(1000,function(){
				$('.bottom',this).css('top','100%').css('opacity',1);
			});

			setTimeout(function(){
				$('.ability').css('opacity',1);
				calculatePositions('123');
			},10);
			
		},2400);		
		

		

	},2500);
	
	$(window).on('scroll',function(){
		calc=$(this).scrollTop()*1.2;
		$('#page1').css('background-position','center -'+calc+'px');
	});
	

});



function calculatePositions(containerId){
	
	var bigCircleId = "#b"+containerId + ' .ci';
	var radius 		= 200 - 50 -5 ; //outer circle radius - result circle radius - offset
	var num    		= $(bigCircleId).children().length;
	var dividers  	= 360/num;
	var center 		= 155; // radius of middle circle + 5(offset)
	var theta       = 0.0;
	var radians = dividers * (Math.PI / 180);
	
	for(var i=0;i<num;i++){
		
		var x = Math.round(center+radius*Math.cos(theta));
		var y = Math.round(center+radius*Math.sin(theta));
		
		$(bigCircleId+" > div:eq("+(i)+")").css({'left':x,'top':y});
		
		theta +=  radians;
	}
	
}