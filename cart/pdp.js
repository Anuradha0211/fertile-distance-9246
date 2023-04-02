

let footer = document.querySelector('footer');
footer.innerHTML=` <div id="toppart">
<div id="leftpart">
  <div>
    <h5>ABOUT</h5>
    <a href="">Contact Us</a><br />
    <a href="">About Us</a><br />
    <a href="">Careers</a><br />
    <a href="">Flipkart Stories</a><br />
    <a href="">Press</a><br />
    <a href="">Flipkart Wholesale</a><br />
    <a href="">Corporate Information</a><br />
  </div>
  <div>
    <h5>HELP</h5>
    <a href="">Payments</a><br />
    <a href="">Shipping</a><br />
    <a href="">Cancellation & Returns</a><br />
    <a href="">FAQ</a><br />
    <a href="">Report Infringement</a><br />
  </div>
  <div>
    <h5>CONSUMER POLICY</h5>
    <a href="">Return Policy</a><br />
    <a href="">Terms Of Use</a><br />
    <a href="">Security</a><br />
    <a href="">Privacy</a><br />
    <a href="">Sitemap</a><br />
    <a href="">Grievance Redressal</a><br />
    <a href="">EPR Compliance</a><br />
  </div>
  <div>
    <h5>SOCIAL</h5>
    <a href="">FaceBook</a><br />
    <a href="">Twitter</a><br />
    <a href="">YouTube</a><br />
  </div>
</div>
<div class="vertical"></div>
<div id="rightpart">
  <div>
    <h5>Mail</h5>
    <p>
      Flipkart Internet Private Limited, <br />
      Buildings Alyssa, Begonia & <br />
      Clove Embassy Tech Village, <br />
      Outer Ring Road, Devarabeesanahalli<br />
      Village, Bengaluru, 560103, <br />
      Karnataka, India
    </p>
  </div>
  <div>
    <h5>Registered Office Address:</h5>
    <p>
      Flipkart Internet Private Limited,<br />
      Buildings Alyssa, Begonia &<br />
      Clove Embassy Tech Village,<br />
      Outer Ring Road, Devarabeesanahalli<br />
      Village, Bengaluru, 560103,<br />
      Karnataka, India<br />
      CIN : U51109KA2012PTC066107<br />
      Telephone: 044-45614700
    </p>
  </div>
</div>
</div>
<hr />
<div id="basesection">
<h4>Become a Seller</h4>
<h4>Advertise</h4>
<h4>Gift Cards</h4>
<h4>Help Center</h4>
<h4>© 2007-2023 Flipkart.com</h4>
<img src="./Images/payment-method_.svg" alt="" />
</div>`


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
    
    if(auth){
       
       let ans = checkCart(userCart,prod.id);
       if(ans == false){
        alert('Item already in Cart');
       }else{
        userCart.push({...prod,quantity:1});
        cart[auth] = userCart;
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
         cart[auth] = userCart;
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