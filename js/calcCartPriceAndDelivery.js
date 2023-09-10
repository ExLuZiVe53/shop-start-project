function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const priceElements = cartWrapper.querySelectorAll('.price__currency');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

  // Загальна ціна товарів
  let priceTotal = 0;

  // Проходимся по всіх блоках з цінами в корзині
  priceElements.forEach(function (item) {
    //Знаходимо кількість товарів
    const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

    // Додаємо ціну товара в загальну ціну(кількість * ціна)
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });

  // Відображаємо ціну на сторінці
  totalPriceEl.innerText = priceTotal;

  // Приховуємо або показуємо блок з ціною доставки
  if (priceTotal > 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  // Показуємо ціну доставки
  if (priceTotal >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }
}
