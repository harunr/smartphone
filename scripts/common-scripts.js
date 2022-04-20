   
(function($){
	$(function(){
// Phone nav click function
        $('.humberger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });
        
		if($('.shop-drink-info').length){
            $('.shop-drink-info').slick({
                dots: false,
                arrows:false,
                speed: 1000,
                infinite: true,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                           
                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.shop-drink-info').slick('resize');

            });
        }  
        

        if($('.info-product-inner').length){
            $('.info-product-inner').slick({
                dots: false,
                arrows:false,
                speed: 1000,
                infinite: true,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,

                        }
                    },
                    {
                        breakpoint: 481,
                        settings: "unslick"
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.info-product-inner').slick('resize');

            });
        } 
		
        $('.modal').click(function () {
            $("body").addClass("modalShown");
            $(".newsletter-modal-wrap").fadeIn()
        });
        $('#modal').click(function () {
            $("body").removeClass("modalClose");
            $(".newsletter-modal-wrap").fadeOut()
        });
    })

    
})(jQuery)

