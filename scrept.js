
// 1st navbar javascript
// =============================================1st
$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }
        // ==========================
        // scroll-up-btn
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        // ==========================
        // scroll-up-btn2
        if(this.scrollY > 3400){
            $('.scroll-up-btn').addClass("footer3");
        }else{
            $('.scroll-up-btn').removeClass("footer3");
        }

    });


    // ==========================
    // scroll-up-btn||slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    
    //=================2nd
    // toggle menu/navbar script
    $(".menu-btn").click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ===============================
    // typed js || typed animation script
        var typed = new Typed(".auto-type", {
            strings: ["Web Developer", "Student of CSE", "Blogger", "Designer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true

        })

        var typed = new Typed(".auto-type2", {
            strings: ["Web Developer", "Muslim", "Visitor", "Freelancer", "Joker🤪"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true

        })

    // =============================
    // owl carousel script
    $(".carousel").owlCarousel({
        margin:20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            },
        }
    });


// ==========================================
// =========================================
// read more button



    $(".read-more-btn").click(function(){
        $(".collaps-para").slideToggle(1000);
    });
    
    var btn = document.querySelector(".read-more-btn");
    btn.addEventListener("click", function(){
        if(btn.innerHTML === "Read more"){
            btn.innerHTML = "Read Less";
            
        }else{
            btn.innerHTML= "Read more";
        }
        // if(btn.innerText === "Read more"){
        //     btn.innerText = "Read Less";
        // }else{
        //     btn.innerText= "Read more";
        // }

    })













});


// 1st navbar javascript
// =============================================
// window.addEventListener("scroll", function(){
//     var header = document.querySelector(".navbar");
//     header.classList.toggle("sticky", window.scrollY > 20);
// })


// ================================================

// const header = document.querySelector(".navbar");

// window.addEventListener('scroll',() => {
//     if(window.scrollY > 20){
//         header.classList.add('sticky');
//     }else{
//         header.classList.remove('sticky');
//     }
// });
// ==============================================
// ==============================================



// 2nd navbar desigine
// ==============================================

// ==================================================
// const menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector(".menu");
// menuBtn.onclick
// menuBtn.addEventListener("click", function(){
//     menu.classList.add("active");
//     // menu.checked.classList.remove("active");
// })
// ===================================================














