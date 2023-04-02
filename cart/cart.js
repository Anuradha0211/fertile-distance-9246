let container = document.querySelector('.container-box');
let backLog = document.querySelector(".backLog");
let numItem = document.querySelector("#numItem");
let cardContainer = document.querySelector("#container");



 let auth = localStorage.getItem("auth")||false;
 let cart = JSON.parse(localStorage.getItem("cart"))||{};
 let userCart;

  if(auth){
     if(cart[auth]!==undefined){
         userCart = cart[auth];
         getCards(userCart);
     }else{
       userCart = [];
       alert("Please add some items in cart");
     }
     container.style.display = "block";
    backLog.style.display = "none";
  }else{
    container.style.display = "block"
     backLog.style.display = "flex";
 }



// if(userCart.length == 0){
//     alert('please add some items to cart');
// }


var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt')
var discountCode = document.getElementById('discount_code1')

function getCards(data){
    product_total_amt.innerText = 0;
    let total = 0;
    
  cardContainer.innerHTML = null;
     data.forEach((el)=>{
        let card = createCard(el.image,el.name,el.brandName,el.price,el.category,el.id,el.quantity);
        total+= +el.price;
        cardContainer.innerHTML+=card;
     })
  
  product_total_amt.innerText = total;
}



function createCard(img,name,brand,price,category,id,quantity){
    return  ` <div class="card p-4">
    <div class="row">
    <!-- cart images div -->
    <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
    <img src=${img} class="img-fluid" alt="cart img">
    </div>
    <!-- cart product details -->
    <div class="col-md-7 col-11 mx-auto px-4 mt-2">
    <div class="row">
    <!-- product name  -->
    <div class="col-6 card-title">
    <h1 class="mb-4 product_name">${name}</h1>
    <p class="mb-2">BRAND - ${brand}</p>
    <p class="mb-2">PRICE: ${price}</p>
    <p class="mb-3">CATEGORY: ${category} M</p>
    </div>
    <!-- quantity inc dec -->
    <div class="col-6">
    <ul class="pagination justify-content-end set_quantity">
    <li class="page-item">
    <button class="page-link " onclick="decreaseNumber(${id})">
    <i class="fas fa-minus"></i> </button>
    </li>
    <li class="page-item"><input type="text" name="" class="page-link" value=${quantity} id=${id} >
    </li>
    <li class="page-item">
    <button class="page-link" onclick="increaseNumber(${id})"> <i class="fas fa-plus"></i></button>
    </li>
    </ul>
    </div>
    </div>
    <!-- //remover move and price -->
    <div class="row">
    <div class="col-8 d-flex justify-content-between remove_wish">
    <p><i class="fas fa-trash-alt"></i> REMOVE ITEM</p>
    <p><i class="fas fa-heart"></i>MOVE TO WISH LIST </p>
    </div>
    <div class="col-4 d-flex justify-content-end price_money">
    
    </div>
    </div>
    </div>
    </div>
    </div>`

    
}







const decreaseNumber = (id) => {
    let input = document.getElementById(id);
    if(input.value == 0)return;
    input.value = +input.value-1;

}
const increaseNumber = (id) => {
    let input = document.getElementById(id);
    input.value = +input.value+1;
    checkObj(id,input.value);
}


function checkObj(id,q){
   userCart.forEach((el) => {
    if(el.id == id){
      el.quantity = q;
      cart[auth] = userCart;
      localStorage.setItem('cart',JSON.stringify(cart));
      function getCards(userCart);
      return;
    }

   });
}

const  discount_code = () => {
let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let error_trw = document.getElementById('error_trw');
if(discountCode.value === 'masai'){
let newtotalamt = totalamtcurr - Math.floor(totalamtcurr/10);
total_cart_amt.innerHTML = newtotalamt;
error_trw.innerHTML = "Hurray! code is valid";
}else{
error_trw.innerHTML = "Try Again! Valid code is masai";
}
}


