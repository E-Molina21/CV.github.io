document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll(".carousel-img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  let current = 0;

  function show(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  prevBtn.onclick = () => {
    current = (current - 1 + images.length) % images.length;
    show(current);
  };

  nextBtn.onclick = () => {
    current = (current + 1) % images.length;
    show(current);
  };
});
