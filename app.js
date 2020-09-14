const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle the nav
    nav.classList.toggle("nav-active");

    //Animate the links
    navLinks.forEach((link, index) => {
      //set delay between each list item.
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards 
            ${index / 7 + 0.5}s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

//main function to run sub functions.
const app = () => {
  navSlide();
};

app();
