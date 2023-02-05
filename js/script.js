$(function(){
        //메뉴 클릭시 페이지로 이동
        var menu = $('#menuWrap>ul>li');
        var contents = $('#contents>div'); 
    
        menu.click(function(event){
            event.preventDefault(); //a링크의 속성 없애기
            var tg = $(this) //클릭되어진 메뉴
            var i = tg.index(); //클릭한 요소를 i라고 함
            var section = contents.eq(i) //i순번에 해당컨텐츠를 section에 담음
            var tt = section.offset().top;
    
            $('html,body').stop().animate({scrollTop:tt});
        });
        //스크롤 이동시 메뉴와 버튼 활성화
	$(window).scroll(function(){
		var sct=$(window).scrollTop(); //페이지 시작시 윈도우창에 스크롤의 위치를 sct(스크롤탑)으로
		contents.each(function(){ //반복문
			var tg=$(this); //현재 해당요소를 tg
			var i=tg.index(); //일치하는요소를 i라 하고
			if(tg.offset().top<=sct){ //스크롤탑의 위치가 top보다 크거나 같다면 tg을 특정좌표로 이동
				menu.removeClass('on'); //메뉴 on취소
				menu.eq(i).addClass('on'); //현재 순번 메뉴 on
			}
		});
	});
     //마우스 휠 이벤트
    $('div.mn').each(function(){
        $(this).on('mousewheel DOMMouseScroll', function(e){
            e.preventDefault();
            var delta = 0;
            if(!event) event = window.event;

            if(event.wheelDelta){
                delta = event.wheelDelta /120; /* 익스,크롬,오페라 */
                /* 마우스휠을 내리게 되면 -120출력, 올리면 120출력 */
            }else if(event.detail) delta = -event.detail / 3 ;

            var moveTop = null;

            //마우스 휠을 위에서 아래로
			if (delta < 0){
				if ($(this).next() != undefined && $(this).next().length > 0 ){
					moveTop = $(this).next().offset().top;
				}else {
                    return;
                   }
				
			//마우스휠을 아래에서 위로
			} else{
				if ($(this).prev() != undefined && $(this).prev().length > 0 ){
					moveTop = $(this).prev().offset().top;
				}else {
                    return;
                   }
			}
            //화면 이동 0.5초
            $('html,body').stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration:500
            });

        });
    });
    

    $("#square").flip({
		trigger:"hover",
		reverse:true, //전환 flase:역전환
		axis:'y' //회전축

	})


});

