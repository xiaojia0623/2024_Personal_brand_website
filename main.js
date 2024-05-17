import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



console.log("Hello world!");

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