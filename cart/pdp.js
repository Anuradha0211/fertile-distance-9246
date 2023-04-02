


let cartBtn = document.querySelector("#addCart");
let buyBtn = document.querySelector("#buyNow");

let auth = localStorage.getItem('auth')||false;
let cart = JSON.parse(localStorage.getItem('cart'))||{};
let prod = JSON.parse(localStorage.getItem('prod'))||{};
// let prod =  {
//     id: "63",
//     category: "book",
//     name: "Teen Machine",
//     desc: "Why did everything seem so demanding, all of a sudden? And why didit seem to be easy for everyone else? Those Shark people were actually laughingat the difficulty level of the test.Avani, a tenth-grade student, has been living in a bubble-she gets top grades at school, loves to read andspends way too much time on her laptop, despite her mother's disapprovingglares. Her life seems perfect-until she is faced with the consequences of alife-altering decision: she decides to prepare for one of the most competitiveentrance exams in the world.Thrustinto the cut-throat world of IIT JEE coaching in eleventh grade, she isdetermined to disprove her mother's doubts about her abilities, live up to herfather's expectations of being a 'smart kid' and be on a par with her peers oreven better.Will Avani be able to balanceexam stress, her interests, new and old friendships, crushes, her parents'expectations and still be the 'best'?",
//     BookNoOfPages: "262",
//     brandName: "Ishita Agarwal",
//     price: "229.00",
//     image: "https://images-na.ssl-images-amazon.com/images/I/41B2C2Frv5L._SX322_BO1,204,203,200_.jpg"
//   }
let userCart;

 let braCat = document.querySelector(".braCat");
   braCat.textContent = `${prod.brandName} ${prod.category}`;
let cat = document.querySelector(".cat"); 
 cat.textContent = prod.category; 
let nam = document.querySelector(".nam");
nam.textContent = prod.name;
let des = document.querySelector(".des");
  des.textContent = prod.desc;
let pri = document.querySelector(".pri");
 pri.textContent = prod.price;
let simg = document.querySelectorAll('.simg');
simg.forEach((el)=>{
    el.src = prod.image;
})




if(auth){
    if(cart[auth]!==undefined){
        userCart = cart[auth];
    }else{
        userCart = [];
    }
}


cartBtn.addEventListener('click',()=>{
    alert('hello');
    if(auth){
       
       let ans = checkCart(userCart,prod.id);
       if(ans == false){
        alert('Item already in Cart');
       }else{
        userCart.push({...prod,quantity:1});
        cart.auth = userCart;
        localStorage.setItem('cart',JSON.stringify(cart));
       } 
    }else{
        window.location.href='../login/login.html';
    }
})



buyBtn.addEventListener('click',()=>{
    if(auth){
       
        let ans = checkCart(userCart,prod.id);
        if(ans == false){
         
        }else{
         userCart.push({...prod,quantity:1});
         cart.auth = userCart;
         localStorage.setItem('cart',JSON.stringify(cart));
        }
        window.location.href = '../payment/payment.html';
     }else{
         window.location.href='../login/login.html';
     }
})

function checkCart(data,id){
    let state = true;
  data.forEach((el)=>{
    if(el.id == id)state = false;
  })
  return state;
}



const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);