document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".scroll-images");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    console.log(currentScroll);
  }

  function handlePrevBtn() {
    scrollImages.scrollBy({
      left: -scrollImages.clientWidth,
      behavior: "smooth",
    });
  }

  function handleNextBtn() {
    scrollImages.scrollBy({
      left: scrollImages.clientWidth,
      behavior: "smooth",
    });
  }

  function handleWindowResize() {
    scrollImages.scrollBy({
      left: -scrollImages.scrollLeft,
      behavior: "smooth",
    });
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", handleWindowResize);
  prevBtn.addEventListener("click", handlePrevBtn);
  nextBtn.addEventListener("click", handleNextBtn);

  checkScroll();
});
