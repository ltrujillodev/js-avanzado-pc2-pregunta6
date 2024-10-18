let cart = [];

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);

  if (name && !isNaN(price) && price > 0) {
    cart.push({ name: name, price: price });
    updateCart();

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
  } else {
    alert("Por favor, ingrese un nombre y un precio válido para el producto.");
  }
}

function removeProduct() {
  const name = document.getElementById("removeProductName").value;

  cart = cart.filter(
    (product) => product.name.toLowerCase() !== name.toLowerCase()
  );
  updateCart();

  document.getElementById("removeProductName").value = "";
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const subtotal1Element = document.getElementById("subtotal1");
  const discountElement = document.getElementById("discount");
  const subtotal2Element = document.getElementById("subtotal2");
  const igvElement = document.getElementById("igv");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";

  let subtotal1 = 0;
  cart.forEach((product) => {
    subtotal1 += product.price;
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(listItem);
  });

  let discount = 0;
  if (subtotal1 > 3000) {
    discount = subtotal1 * 0.1;
  }

  const subtotal2 = subtotal1 - discount;

  const igv = subtotal2 * 0.18;

  const total = subtotal2 + igv;

  subtotal1Element.textContent = subtotal1.toFixed(2);
  discountElement.textContent = discount.toFixed(2);
  subtotal2Element.textContent = subtotal2.toFixed(2);
  igvElement.textContent = igv.toFixed(2);
  totalElement.textContent = total.toFixed(2);
}
