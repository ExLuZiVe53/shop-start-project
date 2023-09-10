// Додаємо прослуховувач на все вікно
window.addEventListener('click', function (event) {
  // Оголошуємо зміну для лічильника
  let counter;
  // Перевіряємо клік строго по кнопкам Плюс або Мінус
  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    // Знаходимо обгортку лічильника
    const counterWrapper = event.target.closest('.counter-wrapper');
    // Знаходимо дів з числом лічильника
    counter = counterWrapper.querySelector('[data-counter]');
  }

  // Перевіряємо чи елемент по якому ми натиснули є кнопкою Плюс
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }
  // Перевіряємо чи елемент по якому ми натиснули є кнопкою Мінус
  if (event.target.dataset.action === 'minus') {
    // Перевіряємо чи лічильник був більше 1
    if (parseInt(counter.innerText) > 1) {
      // Змінюємо текст в лічильнику віднімаючи 1
      counter.innerText = --counter.innerText;
      // Перевіряємо чи товар знаходиться в корзині
    } else if (
      event.target.closest('.cart-wrapper') &&
      parseInt(counter.innerText) === 1
    ) {
      // Видаляємо товар із корзини
      event.target.closest('.cart-item').remove();
    }
  }
});
