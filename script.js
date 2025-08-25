let playOnce = true;

window.addEventListener("scroll", () => {
  // Navbar effect
  // if (window.scrollY > 50) {
  //   navbar.style.height = "45px";
  // } else {
  //   navbar.style.height = "90px";
  // }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
  // Image
  if (scrollValue > 0.40) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  };
  if (scrollValue > 0.60) {
    imgVision.style.opacity = 1;
    imgVision.style.transform = "none";
  };
 
  // Popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});

// menu beurger
// const sidebar = document.getElementById("navbar");
// const content = document.querySelector(".content");

// btnt.addEventListener("click", ()=>{
//     sidebar.classList.toggle("active");
// })

// la navbar se ferme quand on clique sur un lien

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});


