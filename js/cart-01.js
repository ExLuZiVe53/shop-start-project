// Відстежуємо клік по сторінкі
window.addEventListener('click', function (event) {
  // Перевіряємо чи клік був проведений на кнопку "Добавити в корзину"
  if (event.target.hasAttribute('data-cart')) {
    // Знаходимо карточку з товаром в середині ми клікнули
    const card = event.target.closest('.card');
    // Збираємо дані з цього товара та записуємо один в об'єкт productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemInBox: card.querySelector('[data-items-in-box]').innerText,
    };
  }
});
