const navbar = document.querySelector('#NavBar');
let sticky = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY > sticky) {    
    navbar.classList.add('sticky');
    console.log("sticky")
  } else if(window.screenY<=sticky) {
    navbar.classList.remove('sticky');    
    console.log("non ")
  }
}
window.addEventListener('scroll', stickynavbar);

window.addEventListener('load', function () {
  var popupAdModal = new bootstrap.Modal(document.getElementById('popupAdModal'));
  popupAdModal.show();

  // Set display to block when modal is shown
  document.getElementById('popupAdModal').style.display = 'block';
});

// Ensure modal display is set to none when hidden and re-enable pointer events
document.getElementById('popupAdModal').addEventListener('hidden.bs.modal', function () {
  document.getElementById('popupAdModal').style.display = 'none';
  document.getElementById('popupAdModal').style.zIndex='-10';
  document.querySelector('.modal-backdrop').remove();
  document.body.classList.remove('modal-open');
});
// animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
      } else {
          reveals[i].classList.remove("active");
      }
  }
}
function revealY() {
  var reveals = document.querySelectorAll(".revealY");
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("activeY");
      } else {
          reveals[i].classList.remove("activeY");
      }
  }
}


function revealZ() {
  var reveals = document.querySelectorAll(".revealZ");
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =200;

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("activeZ");
      } else {
          reveals[i].classList.remove("activeZ");
      }
  }
}

window.addEventListener("scroll", revealY);
window.addEventListener("scroll", revealZ);
window.addEventListener("scroll", reveal);