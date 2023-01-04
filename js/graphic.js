$(function(){
    var tab =$('#graphicWrap .graphic_left ul li'); //그래픽 메뉴
    var content =$('#graphicWrap .porf_box > div'); //보여지는 내용

    content.hide().eq(0).show();
    tab.eq(0).addClass('active');

    tab.click(function(e){
        e.preventDefault(); //a링크의 원래의 링크 속성 없애기

        
        var tg = $(this); //텝메뉴에 클릭되어진 대상
        var i = tg.index(); //인덱스는 순번을 의미함. 선택되어진 순번
        tab.removeClass('active'); //활성화된 스타일 제거
        tg.addClass('active'); //클릭한 대상에 스타일 활성화

        content.css("display", "none");
		content.eq(i).css("display", "block");

    });
});


$(function(){

    var more = $('#graphic .porf_box > div');
    var pop = $('#project_content > div');
       
    $(more).click(function(){
        var tg = $(this);
        var i = tg.index();
        pop.css("display","none");
        pop.eq(i).css("display","block");
    });

    $('.pop_button').click(function(){
        $(this).parent('#popup').css('display','none');
    });

    
});
