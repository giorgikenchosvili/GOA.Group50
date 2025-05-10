

const cartButton = document.querySelector(".cart-button");
const container = document.getElementById("conteiner");
const closeCartBtn = document.getElementById("close-cart");
const clearCartBtn = document.getElementById("clear-cart");
const cartItems = document.getElementById("cart-items");
const addToCartButtons = document.querySelectorAll(".holi button");


cartButton.addEventListener("click", function(){
    container.style.display = "block";
});


closeCartBtn.addEventListener("click",function(){
    container.style.display = "none";
});


clearCartBtn.addEventListener("click",function(){
    cartItems.innerHTML = "";
});


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


container.style.display = "none";



const payBtn = document.getElementById("pay-button");
const paymentForm = document.getElementById("payment-form");
const checkoutForm = document.getElementById("checkout-form");

payBtn.addEventListener("click",function() {
    paymentForm.style.display = "block";
});

checkoutForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("გადახდა წარმატებით შესრულდა! გმადლობთ.");
    paymentForm.style.display = "none";
    cartItems.innerHTML = "";
    container.style.display = "none";
});

    
    
