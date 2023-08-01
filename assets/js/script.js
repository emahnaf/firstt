// Offcanvas
$('#btnToggle').click(() => {
    $('#backdrop').toggleClass('show')
    $('#offcanvas').toggleClass('show')
})

$('#backdrop').click(() => {
    $('#backdrop').removeClass('show')
    $('#offcanvas').removeClass('show')
})

$('#btn-close').click(() => {
    $('#backdrop').removeClass('show')
    $('#offcanvas').removeClass('show')
})

$('.offcanvas-menu a').click(function () {
    $('#backdrop').removeClass('show')
    $('#offcanvas').removeClass('show');
});

// Get the button
let mybutton = document.getElementById("tombolbtt");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}