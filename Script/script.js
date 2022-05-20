$(document).ready(()=>{
    // $("#cart-li").click(function(){
    //     $('.cart-drop').css('display','block');
    //     $('.cart-drop').css('top','55px');
    // })
    // $('.btn-x').click(function(){
    //     $('.cart-drop').fadeOut();
    // })
    // $('.search-btn-btn').click(()=>{
    //     var a = 0;
        
    //     if(a == 0)
    //     {
    //         $('.search').css('margin-top','0px');
    //         $('.bi-search').attr("class","bi bi-x");
    //         a = 1;
    //     }
    //     else
    //     {
    //         $('.search').css('margin-top','-200px');
    //         $('.bi-x').attr("class","bi bi-search");
    //         a = 0;
    //     }
        
    // })

    $('.btn-cart').click(function(){
        $('.sidebar').css({"right":"0px"});
        $('.sidebar-dark').fadeIn();
    })
    $('.btn-cart-close').click(function(){
        $('.sidebar').css({"right":"-400px"});
        $('.sidebar-dark').fadeOut();
    })
    $('.sidebar-dark').click(function(){
        $('.sidebar').css({"right":"-400px"});
        $(this).fadeOut();
    })
    $('.cart-img-container').mouseover(function(){
        $(this).parent().find('.xxx').css('display','flex');
    })
    $('.cart-img-container').mouseout(function(){
        $('.xxx').css("display","none");
    })
    $('.mobile-close-menu').click(()=>{
        $('.mobile-side').css({"right":"-100%","opacity":"0.1"});
        
    })
    $('.btn-menu').click(function(){
        $('.mobile-side').css({"right":"0","opacity":"1"});
    })
    $('.btn-search').click(function(){
        $('.pop-search').css({"top":"0px"});
    })
    $('.search-close').click(function(){
        $('.pop-search').css({"top":"-100%"});
    })
    $('.menu-a').mouseover(function(){
        $(this).parent().find('.menu-menu').css("display","block");
    })
    $('.menu-a').mouseout(function(){
        $(this).parent().find('.menu-menu').css("display","none");
    })
    $('.run-view').click(function(){
        var img = $(this).parent().find('.img-view-hidden').val();
        var name = $(this).parent().find('.name-view-hidden').val();
        var price = $(this).parent().find('.price-view-hidden').val();
        var view = $(this).parent().find('.views-view-hidden').val();
        $('.quickname').html(name);
        $('.imgg-view').attr('src',img);
        $('.price-result').html(price);
        $('.view-result').html(view);
        $('.dark-view').fadeIn();
        $('.quick-view-container').css({"top":"10%","opacity":"1"});
    })
    $('#close-view').click(function(){
        $('.dark-view').fadeOut();
        $('.quick-view-container').css({"top":"-100%","opacity":"0.1"});
    })
    $('#quick-bok').click(function(){
        var result = parseInt($('#result').val());
        var total = result + 1;
        $('#result').attr("value",total);
    })
    $('#quick-dok').click(function(){
        var result = parseInt($('#result').val());
        if(result >1)
        {
            var total = result - 1;
            $('#result').attr("value",total);
        }
    })

})