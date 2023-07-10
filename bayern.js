// Exemple de données de produit
const product = {
  id: 1,
  name: "Bayern Munich Maillot 2022-2023",
  price: 50.0,
};

// Fonction pour ajouter un produit au panier
function addToCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Le produit a été ajouté au panier !");
}

// Ajouter un gestionnaire d'événements au bouton "Ajouter au panier"
const addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", addToCart);
