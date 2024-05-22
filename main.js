import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



console.log("Hello world!");


//header點擊互動
$(document).ready(function() {
  $('.nav-link').click(function() {
    // 移除所有<li>的active類
    $('.nav-item').removeClass('active');
    // 為被點擊的<li>添加active類
    $(this).closest('.nav-item').addClass('active');
  });
});





//swiper 輪播
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 35,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});



//Modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



