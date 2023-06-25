const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;

    function goToSlide(n) {
      slides.forEach(slide => {
        slide.style.transform = `translateX(-${n * 100}%)`;
      });
      currentSlide = n;
    }

    function prevSlide() {
      if (currentSlide === 0) {
        goToSlide(slides.length - 1);
      } else {
        goToSlide(currentSlide - 1);
      }
    }

    function nextSlide() {
      if (currentSlide === slides.length - 1) {
        goToSlide(0);
      } else {
        goToSlide(currentSlide + 1);
      }
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);