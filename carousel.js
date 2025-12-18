document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll(".carousel-img");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  let index = 0;

  function show(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    show(index);
  };

  next.onclick = () => {
    index = (index + 1) % images.length;
    show(index);
  };
});

