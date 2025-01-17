     
     $(document).ready(function(){
 $('.bxslider1').bxSlider({
   auto: true,
   mode: 'fade',
   infinteLoop: true
 });
 $('.enhanceimg').bxSlider({
    auto:true
 });
 $('.bxsliderperson').bxSlider({
    controls:false
 });

$(".inputpad").focus(function(){
   $ (this).css("background-color","white")
});
$(".inputpad").blur(function(){
    $(this).css("background-color","black")
});
$("#nav-showall-tab").focus(function(){
 $(this).css("background-color","#ffc107")
})
$("#nav-showall-tab").blur(function(){
 $(this).css("background-color","white")
});
$("#nav-commercial-tab").focus(function(){
 $(this).css("background-color","#ffc107")
});
$("#nav-commercial-tab").blur(function(){
 $(this).css("background-color","white")
});
$("#nav-education-tab").focus(function(){
 $(this).css("background-color","#ffc107")
});
$("#nav-education-tab").blur(function(){
 $(this).css("background-color","white")
});
$("#nav-government-tab").focus(function(){
 $(this).css("background-color","#ffc107")
});
$("#nav-government-tab").blur(function(){
 $(this).css("background-color","white")
});
$("#nav-infrastructure-tab").focus(function(){
 $(this).css("background-color","#ffc107")
});
$("#nav-infrastructure-tab").blur(function(){
 $(this).css("background-color","white")
});
$("#nav-residential-tab").focus(function(){
 $(this).css("background-color","#ffc107")
});
$("#nav-residential-tab").blur(function(){
 $(this).css("background-color","white")
});
$("#nav-healthcare-tab").focus(function(){
 $(this).css("background-color","#ffc107")
});
$("#nav-healthcare-tab").blur(function(){
 $(this).css("background-color","white")
});


$('.counterup').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counterup').addClass('animated fadeInDownBig');



    $('.imginimg').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600,
    });
});

