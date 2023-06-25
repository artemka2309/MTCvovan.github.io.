// Функция для плавного скроллинга к элементу по id
function smoothScroll(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  }
  
  window.addEventListener("DOMContentLoaded", function() {
  // Получаем ссылку на форму
  const form = document.querySelector("form");

  // Обрабатываем событие отправки формы
  form.addEventListener("submit", function(event) {
    // Проверяем каждое поле формы на заполненность
    const nameInput = document.querySelector("#name");
    const telInput = document.querySelector("#tel");
    const messageInput = document.querySelector("#message");

    if (!nameInput.value || !telInput.value || !messageInput.value) {
      // Если какое-либо из полей не заполнено, предотвращаем отправку формы и выводим сообщение
      event.preventDefault();
      alert("Пожалуйста, заполните все поля формы.");
    }
  });
  });
  function openMapModal() {
    document.getElementById("mapModal").classList.remove("hidden");
  }

  function closeMapModal() {
    document.getElementById("mapModal").classList.add("hidden");
  }
  const carousel = document.querySelector('.carousel');
  const inner = document.querySelector('.carousel-inner');
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');

  const itemWidth = carousel.offsetWidth;
  let translateX = 0;

  prevBtn.addEventListener('click', () => {
    translateX += itemWidth;
    translateX = Math.min(0, translateX);
    inner.style.transform = `translateX(${translateX}px)`;
  });

  nextBtn.addEventListener('click', () => {
    translateX -= itemWidth;
    const maxTranslateX = -itemWidth * (inner.children.length - 1);
    translateX = Math.max(maxTranslateX, translateX);
    inner.style.transform = `translateX(${translateX}px)`;
  });
  