window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 450);
});


const cardButtons = document.querySelectorAll(".card-button");


cardButtons.forEach(button => {
  button.onclick = function() {

    alert("¡Agregaste el producto al carrito!");
  };
});

function scrollToSection() {
    const app = document.getElementById('information');
  
    app.scrollIntoView({ behavior: 'smooth' });
  }
  
  $(document).ready(function () {
    $(".general-content").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
      nextArrow: "<button type='button' class='slick-next'>Next</button>",
    });
  });