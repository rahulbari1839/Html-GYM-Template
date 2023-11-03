 
 jQuery('document').ready(function(){ 


        jQuery('.rbt_laoder_wrapper').hide();
        jQuery('.body-Layout').show();


        RBTTemplateHtmlWowCall();


 $('.carousel-slider-Rbt').owlCarousel({
        items: 1,
        animateOut: '.carousel-slider-Rbt',
        loop: true,
        margin: 10,
        nav:true,
        dots: false,
        autoplay:true,
    });

   
})



  $('.carousel-slider-thrid').owlCarousel({
        animateOut: '.carousel-slider-thrid',
        loop: true,
        margin: 10,
        nav:true,
        autoplay:true,

        responsive:{
            0:{
                items:1
            },
            
            1000:{ items:3
           },
        }
    }); 

function RBTTemplateHtmlWowCall(){
    if(jQuery('body').find('.wow').length != 0 ){

        new WOW().init();
    }
}


