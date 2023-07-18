// Знаходимо елементи на сторінкі
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

console.log(counter);

// Відстежуємо клік на кнопку btnMinus
btnMinus.addEventListener('click', function () {
  // Перевіряємо щоб лічильник був більше одиниці
  if (parseInt(counter.innerText) > 1) {
    // Змінюємо текст в лічильнику віднімаючи одиницю
    counter.innerText = --counter.innerText;
  }
});

// Відстежуємо клік на кнопку btnPlus
btnPlus.addEventListener('click', function () {
  // Змінюємо текст в лічильнику додаючи одиницю
  counter.innerText = ++counter.innerText;
});
