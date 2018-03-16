jQuery(document).ready(function() {


        function toggleFunction(){
                jQuery("a#services").click(function(){
                        $('div.quick_order_form').toggle('2000');
                });
        }
        toggleFunction();
        var scrollLink=$('.scroll');

        scrollLink.click(function(e){
                e.preventDefault();
                $('body,html').animate({
                        scrollTop: $(this.hash).offset().top
                },1000);
        });
        function hoverFunction(){
                jQuery("a.ride-user-btn").hover(function(){
                        $('this').style('boader-bottom','2px');
                });
        }
        hoverFunction();
        //---defining function animate()----//
// function animate(){
//     jQuery("div #top-logo-container").mouseenter(function(){
//       $("div #top-logo-header").addClass("animated flip");
//       $("a#top-header p span#section-text-a").addClass("animated bounceInRight");
//       $("p span#section-text-b").fadeIn();
//     });

//     jQuery("div #top-logo-container").mouseleave(function(){
//        $("div #top-logo-header").removeClass("animated flip");
//        $("p span#section-text-a").fadeOut();
//        $("p span#section-text-b").fadeOut(); 
//        //$("p span#second").addClass("animated bounceInRight");
//     });
// }
// animate();
        //----calling function animate().....//

// function animate_icon(){
//     jQuery("#social_one").mouseenter(function(){
//      $("#social_one").addClass("animated flip");
//      });
//     jQuery("#social_one").mouseleave(function(){
//       $("#social_one").removeClass("animated flip");
//      });
//     jQuery("#social_two").mouseenter(function(){
//   		$("#social_two").addClass("animated flip");
//      });
//     jQuery("#social_two").mouseleave(function(){
//       $("#social_two").removeClass("animated flip");
//       });

//     jQuery("#social_three").mouseenter(function(){
//   		 $("#social_three").addClass("animated flip");
//       });
//     jQuery("#social_three").mouseleave(function(){
//        $("#social_three").removeClass("animated flip");
//     }); 
//     jQuery("#social_four").mouseenter(function(){
//   	  	$("#social_four").addClass("animated flip");
//     });
//     jQuery("#social_four").mouseleave(function(){
//         $("#social_four").removeClass("animated flip");
//     });
//     jQuery("#social_five").mouseenter(function(){
//   		$("#social_five").addClass("animated flip");
//     });
//     jQuery("#social_five").mouseleave(function(){
//       $("#social_five").removeClass("animated flip");
//     });

//  }

//   animate_icon();

//  var count=jQuery("#stick").offset().top;
//  jQuery("#stick").wrap('<div class="top-placeholder"></div>'); 
//  jQuery(".top-placeholder").height(jQuery("#stick").outerHeight());
  
//   jQuery(window).scroll(function(){
//       var scrollPos=jQuery(window).scrollTop();  

//      if(scrollPos >= count){
//    jQuery("#stick").addClass("fixed");
//    }
//    else{
//    	jQuery("#stick").removeClass("fixed");
//    }
  
//    });
  
//   function logo_container_animate(){
//     jQuery("#logo_container").mouseenter(function(){
//       $("#span_logo").addClass("animated flip");
//       $("p span#second_two").fadeIn();
//       $("p span#second_two").addClass("animated bounceInRight");
//     });
//     jQuery("#logo_container").mouseleave(function(){
//        $("#span_logo").removeClass("animated flip");
//       $("p span#second_two").fadeOut();
//       $("p span#second_two").removeClass("animated bounceInRight");
//     });
//   }
//   logo_container_animate();

//   if($(window).width() > 768){ 
//         $("div#container").style.css("color", "red");
//       } else {
//         $("div#container").style.css("color", "white");
//       }
//   function smooth_scrooler(){
    
//   }
   
});
