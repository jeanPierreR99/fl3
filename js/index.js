// const cargarSonido = function (fuente) {
//   const sonido = document.createElement("audio");
//   sonido.src = fuente;
//   sonido.setAttribute("preload", "auto");
//   sonido.setAttribute("controls", "none");
//   sonido.style.display = "none"; // <-- oculto
//   document.body.appendChild(sonido);
//   return sonido;
// };
// const sonido = cargarSonido("./img/dino.mp3");


function animationDrop(){

}

function animationInit() {
  TweenMax.to('.main-content', 5, {
    delay: 0.1,
    display:'none',
  })

  // before init
  TweenMax.from('.main-content-left', 1, {
    delay: .2,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.main-content-mid', 2, {
    delay: .2,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.image-main', 2.5, {
    delay: .2,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.main-content-right', 1, {
    delay: .2,
    x: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.to('.left', 2, {
    delay: 3,
    width: '100%',
    background: 'black',
    ease: Power4.easeInOut
  })
  TweenMax.to('.right', 2, {
    delay: 3,
    width: '100%',
    background: 'black',
    ease: Power4.easeInOut
  })
  TweenMax.from('.text h1', 2, {
    delay: 4,
    x: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.text p', 2, {
    delay: 4.4,
    x: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('#bottomnav-nav1', 2, {
    delay: 4.5,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('#bottomnav-nav2', 2, {
    delay: 4.7,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('#bottomnav-nav3', 2, {
    delay: 4.9,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('#bottomnav-nav4', 2, {
    delay: 5,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.to('.main', 2, {
    delay: 3.5,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.social li', 2, {
    delay: 8,
    y: 1700,
    ease: Circ.easeInOut
  })
  TweenMax.to('.jean', 2, {
    delay: 4,
    width: '100%',
    ease: Power2.easeInOut
  })
  
  TweenMax.from('.blur-image', 2, {
    delay: 7,
    x: -2000,
    ease: Power2.easeInOut
  })
  TweenMax.from('.name1', 2, {
    delay: 5,
    x: -1700,
    ease: Circ.easeInOut
  })

  TweenMax.from('.name2', 2, {
    delay: 5.1,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.name3', 2, {
    delay: 5.2,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.name4', 2, {
    delay: 5.3,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.name5', 2, {
    delay: 5.4,
    x: -1700,
    ease: Circ.easeInOut
  })

  TweenMax.from('.name6', 2, {
    delay: 5.5,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.name7', 2, {
    delay: 5.6,
    x: -1700,
    ease: Circ.easeInOut
  })

  TweenMax.from('.name8', 2, {
    delay: 5.7,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.name9', 2, {
    delay: 5.8,
    x: -1700,
    ease: Circ.easeInOut
  })
  TweenMax.from('.bi-caret-down-fill',2,{
    delay: 6,
    y: -1700,
    ease: Circ.easeInOut
  })
}

var cursor = $('#mouse');
document.addEventListener('mousemove', function (e) {
  cursor.css('left', e.clientX-10).css('top', e.clientY-10);
})

$(document).ready(() => {
  saltarA();
  animationInit()
  
  $("#title-jean").hover(function () {
    $('#mouse').addClass('title-jean-hover')
  }, function () {
    $('#mouse').removeClass('title-jean-hover')
  })
  
  //jean
  $(".jean").hover(function () {
    $('#mouse').addClass('title-jean-hover')
    // sonido.play();
  }, function () {
    $('#mouse').removeClass('title-jean-hover')
    // sonido.pause();
  })
  $(".hov").hover( function(){
    $("#mouse").addClass('nav-hover')
  }, function(){
    $("#mouse").removeClass('nav-hover')
  })

  //menu2
  $('.about-nav1').addClass('about-hover')
  $('.right2-body').load('../about1.html')
  
})
function saltarA() {
  navColor1();
  var tiempo = 700;
  $("html, body").animate({ scrollTop: $('#section1').offset().top}, tiempo);
}
function saltarB() {
 navColor2();
  var tiempo = 700;
  $("html, body").animate({ scrollTop: $('#section2').offset().top }, tiempo);
}
function saltarC() {
  navColor3();
  var tiempo = 700;
  $("html, body").animate({ scrollTop: $('#section3').offset().top }, tiempo);
}
function navColor1(){
  $('.nav1').addClass('main-nav-hover')
  $('.nav2').removeClass('main-nav-hover')
  $('.nav3').removeClass('main-nav-hover')
}
function navColor2(){
  $('.nav2').addClass('main-nav-hover')
  $('.nav1').removeClass('main-nav-hover')
  $('.nav3').removeClass('main-nav-hover')
}
function navColor3(){
  $('.nav3').addClass('main-nav-hover')
  $('.nav2').removeClass('main-nav-hover')
  $('.nav1').removeClass('main-nav-hover')
}

//page 2
$('.about-nav1').click(function(){
  $('.right2-body').load('../about1.html')
  $('.about-nav1').addClass('about-hover')
  $('.about-nav2').removeClass('about-hover')
  $('.about-nav3').removeClass('about-hover')


})
$('.about-nav2').click(function(){
  $('.right2-body').load('../about2.html')
  $('.about-nav2').addClass('about-hover')
  $('.about-nav1').removeClass('about-hover')
  $('.about-nav3').removeClass('about-hover')

})
$('.about-nav3').click(function(){
  $('.right2-body').load('../about3.html')
  $('.about-nav3').addClass('about-hover')
  $('.about-nav2').removeClass('about-hover')
  $('.about-nav1').removeClass('about-hover')

})


// new fullpage("#fullpage", {

//   // Scrolling
//   autoScrolling: true,
//   css3: true,

// });

