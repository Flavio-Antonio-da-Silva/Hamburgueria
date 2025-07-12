const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCount = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

//Abrir mmodal do carrinho
 cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
 })

 //Fechar modal ao clicar
 cartModal.addEventListener("click", function(event){
   if (event.target === cartModal){
        cartModal.style.display = "none"
    }
 })

 //Botão fechar modal
 closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
 })

 menu.addEventListener("click", function(event){
    //console.log(event.target)
    
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parentButton.getAttribute("data-price")
        console.log(name)
        console.log(price)
    }   
})