const cartItems = [
  { id: 1, name: "Bayern Munich Maillot 2022-2023", price: 50.0 },
  { id: 2, name: "Produit 2", price: 15.0 },
  { id: 3, name: "Produit 3", price: 20.0 },
];

// Fonction pour afficher les éléments du panier
function displayCartItems() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("item");

    const itemName = document.createElement("span");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = "$" + item.price.toFixed(2);

    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);

    cartContainer.appendChild(cartItem);
  });
}

// Fonction pour calculer le total du panier
function calculateTotal() {
  const totalContainer = document.getElementById("total-amount");
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  totalContainer.textContent = "$" + total.toFixed(2);
}

// Appel des fonctions pour afficher les éléments du panier et calculer le total
displayCartItems();
calculateTotal();
