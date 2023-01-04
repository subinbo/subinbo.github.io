$(function(){	

	floatDiv();

	function floatDiv(){

		var contents =$('#contents>div');

		//스크롤 이동시 컨텐츠 영역들 탑으로 이동하도록
		$(window).scroll(function(){
			var sct = $(window).scrollTop(); //페이지 시작시 윈도우창 스크롤의 위치 맨위로 올리고 변수 sct에 저장

			contents.each(function(){ //반복문
				var tg = $(this);
				var i = tg.index(); //인덱스의 순번을 i에 담음

				//scrollTop()의 위치가 top보다 크거나 같다면 tg를 특정좌표로 이동시킴
				if(tg.offset().top<=sct){
					switch(i){
						case 0:
							skillsProgressbar(); //막대그래프 실행
						break;
					}
				}

			});
		});
	};
	
	/* skills */
	function skillsProgressbar(){
		var photoshopNum = 95;
		var illustratorNum = 90;
		var indesignNum =85;
		var htmlNum = 70;
		var cssNum = 70;
		var javascriptNum = 60;
		var max = 100;
		var duration = 1500; //1.5초

		//프로그래스바 초기화
		$('.bar').css('right','100%');

		//photoshop프로그래스
		$('#photoshop_bar').stop().animate({
			'right':100-(photoshopNum/max*100)+'%'
		},{
			'duration' : duration,
			'easing' : 'easeInOutQuart',
			'progress' : function(animation, progress, msRemaining){
				$('#photoshop_cnt').text(Math.round(photoshopNum*progress)); 
			}
		})

		//illustrator 프로그래스
		$('#illustrator_bar').stop().animate({
			'right':100-(illustratorNum/max*100)+'%'
		},{
			'duration' : duration,
			'easing' : 'easeInOutQuart',
			'progress' : function(animation, progress, msRemaining){
				$('#illustrator_cnt').text(Math.round(illustratorNum*progress)); 
			}
		})

		//indesign 프로그래스
		$('#indesign_bar').stop().animate({
			'right':100-(indesignNum/max*100)+'%'
		},{
			'duration' : duration,
			'easing' : 'easeInOutQuart',
			'progress' : function(animation, progress, msRemaining){
				$('#indesign_cnt').text(Math.round(indesignNum*progress)); 
			}
		})

		//html 프로그래스
		$('#html_bar').stop().animate({
			'right':100-(htmlNum/max*100)+'%'
		},{
			'duration' : duration,
			'easing' : 'easeInOutQuart',
			'progress' : function(animation, progress, msRemaining){
				$('#html_cnt').text(Math.round(htmlNum*progress)); 
			}
		})

		//css 프로그래스
		$('#css_bar').stop().animate({
			'right':100-(cssNum/max*100)+'%'
		},{
			'duration' : duration,
			'easing' : 'easeInOutQuart',
			'progress' : function(animation, progress, msRemaining){
				$('#css_cnt').text(Math.round(cssNum*progress));
			}
		})

		//javascript 프로그래스
		$('#javascript_bar').stop().animate({
			'right':100-(javascriptNum/max*100)+'%'
		},{
			'duration' : duration,
			'easing' : 'easeInOutQuart',
			'progress' : function(animation, progress, msRemaining){
				$('#javascript_cnt').text(Math.round(javascriptNum*progress)); 
			}
		})

	}
	

});
