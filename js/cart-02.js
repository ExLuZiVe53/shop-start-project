// Div всередині кошика в якого ми додаємо товари
const cardWrapper = document.querySelector('.cart-wrapper');

// Відстежуємо клік по сторінкі
window.addEventListener('click', function (event) {
  // Перевіряємо чи клік був проведений на кнопку "Добавити в корзину"
  if (event.target.hasAttribute('data-cart')) {
    // Знаходимо карточку з товаром в середині якої ми клікнули
    const card = event.target.closest('.card');
    // Збираємо дані з цього товара та записуємо один в об'єкт productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };

    // Перевіряємо чи такий товар вже є в корзині

    // cardWrapper.querySelector('[data-id="' + productInfo.id + '"]');
    const itemInCart = cardWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    // Якщо товар є в корзині

    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      // Якщо товара не має в корзині

      // Збираємо дані, підставляємо в шаблон для товара в корзині
      const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

      // Відображаємо товар в корзині
      cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
    }

    // Скидуємо лічильник добавленого товара на "1"
    card.querySelector('[data-counter]').innerText = '1';

    // Показуємо статус в корзині Порожня / Повна
    toggleCartStatus();

    // Перераховуємо загальну кількість товарів в корзині
    calcCartPriceAndDelivery();
  }
});
