  // Hide nav bar on scroll
//   var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
// Tap on Blog Page 
$(document).ready(function(){
  $(".mobile-tap-area").click(function(){
      $(".toggle-mobile-first").toggle();
      $(".toggle-mobile-second").toggle();
  });
});


function openNav() {
    document.getElementById("navbarNavAltMarkup").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("navbarNavAltMarkup").style.width = "0%";
  }
function toggle(){
    $('.ico01').click(function(){
        $('.wrapper').toggleClass('active');
    })
}

toggle();


//Scroll Animation
AOS.init({
    offset:400,
    duration:1000
});
if (document.readyState == 'complete') 
{
    AOS.refresh();
}


baguetteBox.run('.compact-gallery', {
  animation: 'slideIn'
});

