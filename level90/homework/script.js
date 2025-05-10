
// cart-ის ღილაკი
const cartButton = document.querySelector(".cart-button");
const container = document.getElementById("conteiner");
const closeCartBtn = document.getElementById("close-cart");
const clearCartBtn = document.getElementById("clear-cart");
const cartItems = document.getElementById("cart-items");
const addToCartButtons = document.querySelectorAll(".holi button");

// კალათის გახსნა
cartButton.addEventListener("click", () => {
    container.style.display = "block";
});

// კალათის დახურვა
closeCartBtn.addEventListener("click", () => {
    container.style.display = "none";
});

// კალათის გასუფთავება
clearCartBtn.addEventListener("click", () => {
    cartItems.innerHTML = "";
});

// პროდუქტის დამატება
addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".card-one");
        const productName = productCard.querySelector(".ho").textContent;
        const productPrice = productCard.querySelector("p:last-of-type").textContent;

        const li = document.createElement("li");
        li.textContent = `${productName} - ${productPrice}`;
        cartItems.appendChild(li);
    });
});

// თავიდან კალათი დამალულია
container.style.display = "none";



