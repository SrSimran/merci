// TOP PICKS
$(document).ready(function () {
    $('.picks-list-slider').slick({
        dots: true,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
         
        ]
    });
});

// BEST SELLERS
$(document).ready(function () {
    $('.best-collection-list').slick({
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1500,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
// electronics
$(document).ready(function () {
    $('.home-slider').owlCarousel({loop: true, nav: true, autoplay: true, items: 1});

});
// CUSTOMER REVIEWS
$(document).ready(function () {
    $('.review-slider').owlCarousel({loop: true, nav: true, autoplay: true, items: 1});

});
// ///////////////////////////////////PRODUCT DETAIL PAGE///////////////////////////////
$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false
                }
            }
        ]
    });

});
// /////////////////////////// ADD  TO CART PAGE /////////////////////////
// const product = [
//     {
//         id: 0,
//         image: 'image/f2.jpg',
//         title: 'tshirt1',
//         price: 120
//     },
//     {
//         id: 1,
//         image: 'image/k6.jpg',
//         title: 'tshirt2',
//         price: 220
//     },
//     {
//         id: 2,
//         image: 'image/b1.jpg',
//         title: 'tshirt3',
//         price: 1203
//     },
//     {
//         id: 3,
//         image: 'image/t.jpg',
//         title: 'tshirt4',
//         price: 320
//     }, {
//         id: 4,
//         image: 'image/6.png',
//         title: 'tshirt5',
//         price: 120
//     }
// ];

// const categories = [...new Set(product.map((item) => {
//         return item
//     }))];
// let i = 0;
// document.getElementById('root').innerHTML = categories.map((item) => {
//     var {
//         image,
//         title,
//         price
//     } = item;
//     return(`<div class='itembox'>
//         <div class= 'image-itembox'>
//         <img class='itemimage' src=${image}></img>
//         </div>
//         <div class='itembottom'>
//         <p class='itemtitle'>${title}</p>
//         <h5 class='itemprice'>${price}.00</h5>` + "<button class='itembutton' onclick='addtocart(" + (
//         i++
//     ) + ")'>Add to Cart</button>" + `</div>
//        </div>`)
// }).join('')

// var cart = [];

// function addtocart(a) {
//     cart.push({
//         ... categories[a]
//     });
//     displaycart();
// }
// function delElement(a) {
//     cart.splice(a, 1);
//     displaycart();
// }

// function displaycart() {
//     let j = 0,
//         total = 0;
//     document.getElementById("count").innerHTML = cart.length;
//     if (cart.length == 0) {
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//         document.getElementById("total").innerHTML = "$ " + 0 + ".00";
//     } else {
//         document.getElementById("cartItem").innerHTML = cart.map((items) => {
//             var {
//                 image,
//                 title,
//                 price
//             } = items;
//             total = total + price;
//             document.getElementById("total").innerHTML = "$ " + total + ".00";
//             return(`<div class='cart-item'>
//                 <div class='row-img'>
//                     <img class='rowimg' src=${image}>
//                 </div>
//                 <p style='font-size:12px;'>${title}</p>
//                 <h2 style='font-size: 15px;'>$ ${price}.00</h2>` + "<i class=bi bi-trash3-fill onclick='delElement(" + (
//                 j++
//             ) + ")'></i></div>");
//         }).join('');
//     }


// }





///////////////////////////////////////////////////////////////////////

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let viewcart = document.querySelector('#viewCart');
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
viewcart.onclick = () =>{
    cart.classList.add("active");
};

closeCart.onclick = () =>{
    cart.classList.remove("active");
}

///////////////////////////////////////////////////////
//MAKING ADD TO CART
// CART WOKRING JS

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready);
}else{
    ready();
}


// Making function
function ready(){
    // Remove item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for ( var i = 0;  i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for ( var i = 0;  i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    // ADD TO CART
    var addCart = document.getElementsByClassName("add-cart");
    for ( var i = 0;  i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    loadCartItems();
}
// remove cart item
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    saveCartItems();
    UpdateCartIcon();
}
//Quantity Change
function quantityChanged(event){
    var input = event.target;
    // var price = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    updatetotal();
    saveCartItems();
    UpdateCartIcon();
}
// ADD CART FUNCTION
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
    saveCartItems();
    UpdateCartIcon();
}



function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title){
            alert("You have already added this item to cart");
            return updatetotal();
        }
    }
    var cartBoxContent = `
     <img src="${productImg}" alt="" class="cart-img" />
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>  
                <div class="cart-price">${price}</div>
                    <input 
                    type="number"
                    name=""
                    id="" 
                    value="1"
                    class="cart-quantity" />
        </div>
        <i class="bi bi-trash-fill cart-remove"></i>`;
        cartShopBox.innerHTML = cartBoxContent;
        cartItems.append(cartShopBox);
        cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click",removeCartItem);
        cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener("change",quantityChanged);

}


// Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i =0; i <cartBoxes.length;i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }
    // if price contain some cents(decimal value)
    //total = Math.round((total *100) / 100);
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    // save total to localStorage
    localStorage.setItem("cartTotal",total);
}

// Keep item in cart when page refresh with localstorage
function saveCartItems(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++) {
         cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement = cart.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item); 
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Loads In Carts
function loadCartItems(){
    var cartItems = localStorage.getItem("cartItems");
    if(cartItems){
        cartItems = JSON.parse(cartItems);

        for (var i = 0; i < cartItems.length; i++) {
            var item  = cartItems[i];
            addProductToCart(item.title , item.price , item.productImg);
            
            var cartBoxes = document.getElementsByClassName("cart-box");
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem("cartTotal");
    if(cartTotal){
        document.getElementsByClassName("total-price")[0].innerHTML = "$" + cartTotal;
    }
    UpdateCartIcon();
}
// Quantity in Cart Icon

function UpdateCartIcon(){
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity' , quantity);
}

