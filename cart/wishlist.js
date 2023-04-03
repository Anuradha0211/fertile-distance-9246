let nav = document.querySelector("nav");
nav.innerHTML = `<div id="navbar">
<div id="topnav">
  <img src="../Images/Freecraft Logo.jpeg" alt="Logo Error" />
  <div id="navelem">
    <input
      type="text"
      placeholder="Search for products, brands, and more"
    />
    <div class="more">
      <button class="morebtn" id="alogin">Login</button>
      <div class="more-content">
        <a href="#">New Customer? <span>Sign Up</span></a>
        <a href="#">My Profile</a>
        <a href="#">Flipkart Plus Zone</a>
        <a href="#">Orders</a>
        <a href="#">Wishlist</a>
        <a href="#">Rewards</a>
        <a href="#">Gift Cards</a>
      </div>
    </div>
    <a href="">Become a Seller</a>
    <div class="more">
      <button class="morebtn">More</button>
      <div class="more-content">
        <a href="#">Notification Preferences</a>
        <a href="#">24x7 Customer Care</a>
        <a href="#">Advertise</a>
        <a href="#">Download App</a>
      </div>
    </div>
    <a href="./cart.html">Cart</a>
  </div>
</div>
<div id="bottomnav">
  <div id="navproduct">
    <a href="../product/groceries.html"
      ><div>
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          alt="Error"
        />
        <h5>Grocery</h5>
      </div></a
    >
    <a href="../product/mobile.html"
      ><div>
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          alt="Error"
        />
        <h5>Mobiles</h5>
      </div></a
    >
    <div class="productdropdown">
      <a href="../product/fashion.html" class="productbtn">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d34810848b2895c9.png?q=100"
          alt="Error"
        />
        <h5>Fashion</h5>
      </a>
      <div class="productdd-content">
        <a href="#">Men's Top Wear</a>
        <a href="#">Men's Bottom Wear</a>
        <a href="#">Women Ethnic</a>
        <a href="#">Women Western</a>
        <a href="#">Men Footwear</a>
        <a href="#">Women Footwear</a>
        <a href="#">Watches & accessories</a>
        <a href="#">Bags, Suitcases & Luggage</a>
        <a href="#">Kids</a>
        <a href="#">Essentials</a>
        <a href="#">Winter</a>
      </div>
    </div>

    <div class="productdropdown">
      <a href="../product/electronic.html" class="productbtn">
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          alt="Error"
        />
        <h5>Electronics</h5>
      </a>
      <div class="productdd-content">
        <a href="#">Audio</a>
        <a href="#">Electronics GST Store</a>
        <a href="#">Cameras & Accessories</a>
        <a href="#">Computer Peripherals</a>
        <a href="#">Gaming</a>
        <a href="#">Health & Personal Care</a>
        <a href="#">Laptop Accessories</a>
        <a href="#">Laptop & Desktop</a>
        <a href="#">Mobile Accessories</a>
        <a href="#">PowerBank</a>
        <a href="#">Smart Home Automation</a>
        <a href="#">Smart Wearables</a>
        <a href="#">Storage</a>
        <a href="#">Tablets</a>
      </div>
    </div>

    <div class="productdropdown">
      <a href="../product/home.html" class="productbtn">
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          alt="Error"
        />
        <h5>Home</h5>
      </a>
      <div class="productdd-content">
        <a href="#">Home Furnishings</a>
        <a href="#">Furniture Studio</a>
        <a href="#">Living Room Furniture</a>
        <a href="#">Kitchen & Dining</a>
        <a href="#">Bedroom Furniture</a>
        <a href="#">Home Decor</a>
        <a href="#">Tools & Utility</a>
        <a href="#">Work Space Furniture</a>
        <a href="#">Lightnings & Electricals</a>
        <a href="#">Space Saving Furniture</a>
        <a href="#">Cleaning & Bath</a>
        <a href="#">Kids Furniture</a>
        <a href="#">Pet & Gardening</a>
      </div>
    </div>
    <a href=""
      ><div>
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          alt="Error"
        />
        <h5>Appliances</h5>
      </div></a
    >
    <a href="../product/travel.html"
      ><div>
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          alt="Error"
        />
        <h5>Travel</h5>
      </div></a
    >
    <a href=""
      ><div>
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          alt="Error"
        />
        <h5>Top Offers</h5>
      </div></a
    >

    <div class="productdropdown">
      <a href="" class="productbtn">
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          alt="Error"
        />
        <h5>Beauty, Toys & More</h5>
      </a>
      <div class="productdd-content">
        <a href="#">Beauty & Personal Care</a>
        <a href="#">Men's Grooming</a>
        <a href="#">Food & Drinks</a>
        <a href="#">Nutrition & Health Care</a>
        <a href="#">Baby Care</a>
        <a href="#">Toys & School Supplies</a>
        <a href="#">Sports & Fitness</a>
        <a href="#">Books</a>
        <a href="#">Music</a>
        <a href="#">Stationery & Office Supplies</a>
        <a href="#">Auto Accessories</a>
        <a href="#">Safety & Hygiene Essentials</a>
      </div>
    </div>

    <div class="productdropdown">
      <a href="" class="productbtn">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
          alt="Error"
        />
        <h5>Two Wheelers</h5>
      </a>
      <div class="productdd-content">
        <a href="#">Petrol Vehicles</a>
        <a href="#">Electric Vehicles</a>
      </div>
    </div>
  </div>
</div>
</div>`

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

let wishList = JSON.parse(localStorage.getItem('wishlist'))||[];
console.log(wishList);
let auth = localStorage.getItem('auth');

let pdCount = document.querySelector('#count');
let container = document.querySelector('#cardContainer');
let logout = document.querySelector('#logout');
logout.addEventListener('click',()=>{
  localStorage.removeItem('auth');
  auth = false;
  window.location.href='./wishlist.html';
  alert('logout sucessfully');
})

if(auth){
  renderData(wishList);
}

function renderData(data){
  if(!auth)return;
   container.innerHTML= null;
  data.map((el)=>{
    container.innerHTML+= getCard(el);
  })
}
// //brandName
// : 
// "Adidas"
// category
// : 
// "fashion"
// desc
// : 
// "Men Regular Fit Printed Casual Shirt"
// id
// : 
// "1"
// image
// : 
// "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/k/3/x/xl-printed-shirt-for-men-foxter-original-imagktzmkg4wqwrv.jpeg?q=70"
// name
// : 
// "Foxter"
// price
// : 
// 329
// quantity
// : 
// 1

function getCard(obj){
return ` <div  class="card" onclick="pro(${obj.id})">
<div class="img-box">
        <img src= ${obj.image} alt="img">
    </div>

    <div class="midbox">
        
        <div class="midbox-name">
           <div class="name">${obj.name} ${obj.brandName}</div>
           <div  class="delete-box"> <i onclick="deleteWhishList(${obj.id})" class="fa-solid fa-trash"></i></div>
        </div>

        <div class="rating"><span class="p-rating">4.2</span> <i class="fa-solid fa-star r"></i></div>
       
        <div class="price">₹<span class="p-price">${obj.price}</span></div>
    </div>
</div>`
}

function deleteWhishList(id){
      wishList = wishList.filter((el)=>el.id!= id);
      localStorage.setItem('wishlist',JSON.stringify(wishList));
      renderData(wishList);
}

function pro(id){
  wishList.forEach((el)=>{
    if(el.id==id){
      localStorage.setItem('prod',JSON.stringify(el));
      window.location.href = './pdp.html';
    }
  })



}



