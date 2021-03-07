/* preventDefault */
$(function(){
            $('a[href="#"]').click(function(event){
                event.preventDefault();
            })
        })

/* main visual */
$(function(){
    $('.slider').bxSlider({
        auto:true,
        pagerCustom:'.pager',
        prevSelector:'#prevbtn',
        nextSelector:'#nextbtn'
    });
})


/* main menu */
$(function(){
    $('.gnb,.gnb_bg').mouseenter(function(){
        $('.depth2,.gnb_bg').stop().slideDown();
    }) 
    $('.gnb,.gnb_bg').mouseleave(function(){
        $('.depth2,.gnb_bg').stop().slideUp();
    })
})


/* menu fix */
$(function(){
    $(window).scroll(function(){
        var value=$(window).scrollTop();
        if(value>=134){
            $('.header_all').addClass('fix');
        }
        else{
            $('.header_all').removeClass('fix');
        }
    })
})




