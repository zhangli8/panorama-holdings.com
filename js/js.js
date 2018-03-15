$(window).load(function () {
	var oMhas=$('.real-btn').parent().hasClass('cur');
	if (oMhas){
		$('.real').show();
	}else{
		var t;
		$('.real-btn').mouseover(function(){
			clearTimeout(t);
			$('.real-btn').parent().addClass('cur');
			$('.real').show();
		});
		$('.real-btn').mouseout(function(){
			t=setTimeout(function(){$('.real').hide();$('.real-btn').parent().removeClass('cur');},200)
		});
		$('.real').mouseover(function(){
			clearTimeout(t);
		});
		$('.real').mouseout(function(){
			t=setTimeout(function(){$('.real').hide();$('.real-btn').parent().removeClass('cur');},200)
		});
	};
	
	$('.in-arreo').click(function(){
		var oWh=$(window).height();
		$("html,body").animate({ scrollTop:oWh+'px'}, 500 );
	});
})