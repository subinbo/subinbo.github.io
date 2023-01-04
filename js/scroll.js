$(function(){

    //모니터 스크롤
    $('.css_img .main_page').hover(function(){
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        //a요소의 높이 - img높이
        img.stop().animate({top:ah-imgh},5000);
    }, function(){
        var img = $(this).find('img');
        img.stop().animate({top:0},5000);
    });



        //css 탭메뉴
        var tab =$('#css .tabs>li');
        var content =$('#css #tab-css-1>div'); //탭메뉴의 내용영역
    
        content.hide().eq(0).show();
        //컨텐츠영역은 초기에 모두 감추고 순번 0번만 보여지도록 함
    
        tab.click(function(e){
            e.preventDefault(); //a링크의 원래의 링크 속성 없애기
    
            var tg = $(this); //텝메뉴에 클릭되어진 대상
            var i = tg.index(); //인덱스는 순번을 의미함. 선택되어진 순번
            tab.removeClass('active'); //활성화된 스타일 제거
            tg.addClass('active'); //클릭한 대상에 스타일 활성화
    
            content.css('display','none');
            content.eq(i).css('display','block'); //선택되어진 순번의 i 컨텐츠가 보여지도록 함
        });


        //jquary탭메뉴
        var tab2 =$('#jquery .tabs>li');
        var content2 =$('#jquery #tab-css-1>div'); //탭메뉴의 내용영역
    
        content2.hide().eq(0).show();
        //컨텐츠영역은 초기에 모두 감추고 순번 0번만 보여지도록 함
    
        tab2.click(function(e){
            e.preventDefault(); //a링크의 원래의 링크 속성 없애기
    
            var tg = $(this); //텝메뉴에 클릭되어진 대상
            var i = tg.index(); //인덱스는 순번을 의미함. 선택되어진 순번
            tab2.removeClass('active'); //활성화된 스타일 제거
            tg.addClass('active'); //클릭한 대상에 스타일 활성화
    
            content2.css('display','none');
            content2.eq(i).css('display','block'); //선택되어진 순번의 i 컨텐츠가 보여지도록 함
        });

         //responsive탭메뉴
         var tab3 =$('#responsive .tabs>li');
         var content3 =$('#responsive #tab-css-1>div'); //탭메뉴의 내용영역
     
         content3.hide().eq(0).show();
         //컨텐츠영역은 초기에 모두 감추고 순번 0번만 보여지도록 함
     
         tab3.click(function(e){
             e.preventDefault(); //a링크의 원래의 링크 속성 없애기
     
             var tg = $(this); //텝메뉴에 클릭되어진 대상
             var i = tg.index(); //인덱스는 순번을 의미함. 선택되어진 순번
             tab3.removeClass('active'); //활성화된 스타일 제거
             tg.addClass('active'); //클릭한 대상에 스타일 활성화
     
             content3.css('display','none');
             content3.eq(i).css('display','block'); //선택되어진 순번의 i 컨텐츠가 보여지도록 함
         });

         
         //mobile탭메뉴
         var tab4 =$('#mobile .tabs>li');
         var content4 =$('#mobile #tab-css-1>div'); //탭메뉴의 내용영역
     
         content4.hide().eq(0).show();
         //컨텐츠영역은 초기에 모두 감추고 순번 0번만 보여지도록 함
     
         tab4.click(function(e){
             e.preventDefault(); //a링크의 원래의 링크 속성 없애기
     
             var tg = $(this); //텝메뉴에 클릭되어진 대상
             var i = tg.index(); //인덱스는 순번을 의미함. 선택되어진 순번
             tab4.removeClass('active'); //활성화된 스타일 제거
             tg.addClass('active'); //클릭한 대상에 스타일 활성화
     
             content4.css('display','none');
             content4.eq(i).css('display','block'); //선택되어진 순번의 i 컨텐츠가 보여지도록 함
         });


});

$(function(){
    //모바일 스크롤
    $('.mobile_img .main_page').hover(function(){
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        //a요소의 높이 - img높이
        img.stop().animate({top:ah-imgh},5000);
    }, function(){
        var img = $(this).find('img');
        img.stop().animate({top:0},5000);
    });
})