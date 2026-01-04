$(document).ready(function() {
    





    //===== Aos Animation Start

    AOS.init();

    //===== Aos Animation End









    //===== Sticky Menu-Bar Start

    window.onscroll = function() {stickyNavbar()};

    var navbar = document.querySelector(".nav-area");
    
    var stickyPoint = 100;
    
    function stickyNavbar() {
      if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    //===== Sticky Menu-Bar End












    //===== Menu Bar Hover Start
    
    const indicator = document.querySelector('#indicator');
    const indicatoritem = document.querySelectorAll('.nav-menu li a');

    function moveIndicator(e){
        indicator.style.left = e.offsetLeft + 'px';
        indicator.style.width = e.offsetWidth + 'px';
    }

    indicatoritem.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            moveIndicator(e.target)
        });
        
        link.addEventListener('click' , (e) => {
            moveIndicator(e.target)
        });
    });

    window.onload = () => {
        moveIndicator(indicatoritem[0]);
    };

    //===== Menu Bar Hover End











    //==== Nav Menu Slider Start

        $('.nav_trigger').click(function(){
            $('.sidebar, .overlay').addClass('slide_sidebar');
        })

        $('.nav_dismess, .overlay').click(function(){
            $('.sidebar, .overlay').removeClass('slide_sidebar');
        })

    //==== Nav Menu Slider End








    

    // ==== Section Select Start
    $('.nav-menu a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        
        if (target.length) {
            var offset = $(window).width() < 768 ? 50 : 0;
    
            $('html, body').animate({
                scrollTop: target.offset().top - offset 
            }, 1000);
        }
    });
    // ==== Section Select End








});








    
