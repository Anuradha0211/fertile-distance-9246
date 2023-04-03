let LS=JSON.parse(localStorage.getItem("details"));
if(LS==null){
    LS=[]
}

let cart=JSON.parse(localStorage.getItem("cart")) || {};

let auth=localStorage.getItem("auth") || false;


let data=cart[auth];

console.log(data);
// let j=[{
//   "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/k/3/x/xl-printed-shirt-for-men-foxter-original-imagktzmkg4wqwrv.jpeg?q=70",
//   "name": "Foxter",
//   "brandName": "Adidas",
//   "desc": "Men Regular Fit Printed Casual Shirt",
//   "price": 329,
//   "category": "fashion",
//   "id": "1",
//   "quantity":"1"
// },
// {
//   "image": "https://rukminim1.flixcart.com/image/832/832/kyxb9u80/t-shirt/k/n/y/xl-t67-nbwh-eyebogler-original-imagbfyc3rkzaj2y.jpeg?q=70",
//   "name": "EyeBogler",
//   "brandName": "Adidas",
//   "desc": "Men Striped Round Neck Blue T-Shirt",
//   "price": 299,
//   "category": "fashion",
//   "id": "2",
//   "quantity":"1"
// },
// {
//   "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/p/n/1/l-jc22-rn-fs-black-olv-never-jump-cuts-original-imaghcczhrhhfvud.jpeg?q=70",
//   "name": "Jump Cuts",
//   "brandName": "Adidas",
//   "desc": "Men Printed Round Neck Green, Black T-Shirt",
//   "price": 294,
//   "category": "fashion",
//   "id": "3",
//   "quantity":"1"
// },
// {
//   "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/m/i/l-t345-blwhrd-new-eyebogler-original-imafzr4f7nxecr44-bb.jpeg?q=70",
//   "name": "EyeCotton",
//   "brandName": "Adidas",
//   "desc": "Men Color Block Hooded Neck Multicolor T-Shirt",
//   "price": 259,
//   "category": "fashion",
//   "id": "4",
//   "quantity":"1"
// },
// {
//   "image": "https://rukminim1.flixcart.com/image/832/832/kiyw9e80-0/t-shirt/z/s/j/m-t2-seven-rocks-original-imafyn68m9v2pvwh.jpeg?q=70",
//   "name": "Creatywitty",
//   "brandName": "Adidas",
//   "desc": "Men Solid Hooded Neck Black T-Shirt",
//   "price": 329,
//   "category": "fashion",
//   "id": "5",
//   "quantity":"1"
// },
// {
//   "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/p/n/t/xl-tdgyblhenful-d37-tripr-original-imaghaqrggp5t77r.jpeg?q=70",
//   "name": "TRIPR",
//   "brandName": "Adidas",
//   "desc": "Men Solid Mandarin Collar Black, Grey T-Shirt",
//   "price": 299,
//   "category": "fashion",
//   "id": "6",
//   "quantity":"1"
// },
// {
//   "image": "https://rukminim1.flixcart.com/image/832/832/l1grgcw0/t-shirt/x/o/5/m-t428hs-tm5p-eyebogler-original-imagdf2egzjxeqgk.jpeg?q=70",
//   "name": "U Turn",
//   "brandName": "Adidas",
//   "desc": "Men Striped Polo Neck Blue T-Shirt",
//   "price": 299,
//   "category": "fashion",
//   "id": "7",
//   "quantity":"1"
// }];

check(LS)
function check(LS){
   let emaild=document.getElementById("email");
   let named=document.getElementById("name");
   let numberd=document.getElementById("number");
   let pincoded=document.getElementById("pincode");
   let locationd=document.getElementById("location");
   let messaged=document.getElementById("message");
   let cityd=document.getElementById("city");
   let stated=document.getElementById("state");
   let landmarkd=document.getElementById("landmark");
   let altnumd=document.getElementById("sec-no");
   let btn=document.getElementById("addr-button");
   let btn2=document.getElementById("login-button");
   let div=document.getElementById("random");
   let num=document.getElementById("no");
   let num2=document.getElementById("randomcheck");
   let btn3=document.getElementById("confirm");
   let upi=document.getElementById("upi");
   let hide=document.getElementById("hide");
   let cash=document.getElementById("cash");
   let align=document.getElementById("align");
   let btn4=document.getElementById("product-button");
   let paytm2=document.getElementById("paytm2");
   let paytm3=document.getElementById("paytm3");
   let hide2=document.getElementById("hide2");
   let align2=document.getElementById("align2");
   let displayitem=document.getElementById("display-item");
   let mess=document.getElementById("mess");
   let mess2=document.getElementById("mess2");
   let btn5=document.getElementById("btn5");
   let btn6=document.getElementById("btn6");

   chk(data)
    
   function chk(a){
       let sum=0;
       displayitem.innerHTML="";
       for(let i=0;i<a.length;i++){
          let div= document.createElement("div");
          div.classList.add("size");
          let div2=document.createElement("div");
          let div3=document.createElement("div");
          let div4=document.createElement("div");
          let named=document.createElement("h4");
          let priced=document.createElement("h3");
          let imaged=document.createElement("img");
          let descriptiond=document.createElement("p");
          let btn2=document.createElement("button");
          let quantity=document.createElement("span");
          let add=document.createElement("button");
          let subtract=document.createElement("button");

          imaged.setAttribute("src", a[i].image);
          named.innerText=a[i].brandName;
          priced.innerText=`₹${a[i].price}`;
          descriptiond.innerText=a[i].desc;
          quantity.innerText=a[i].quantity;
          btn2.innerText="Remove";
          add.innerText="+";
          subtract.innerText="-";

          add.addEventListener("click",function(){
            a[i].quantity++;
            chk(a);
           })

           subtract.addEventListener("click",function(){
            if(a[i].quantity>1){
                a[i].quantity--;
                chk(a);
            }
           })

           sum+=Number(a[i].quantity)*Number(a[i].price);
           mess.innerText=`₹${sum}`;
           mess2.innerText=`₹${sum}`;
           mess.style.color="blue"
           mess2.style.color="blue"

  
          btn2.addEventListener("click",function(){
           data=data.filter((ele)=>{
               return ele.id!==a[i].id
           })
           chk(data);
          })
          
          div3.append(add,quantity,subtract,btn2);
          div2.append(imaged,div3);
          div4.append(priced,named,descriptiond);
          div.append(div2,div4);
          displayitem.append(div);
       }

   }


   var x = Math.floor((Math.random()* 1000) + 1);
   num.innerText=x;
   div.append(num);
   
   upi.addEventListener("change",()=>{
    hide.style.display="block";
    align.style.display="none";
   })

   cash.addEventListener("change",()=>{
    align.style.display="inline";
    hide.style.display="none";
   })

   paytm2.addEventListener("change",()=>{
    hide2.style.display="flex";
    align2.style.display="none";
   })

   paytm3.addEventListener("change",()=>{
    align2.style.display="block";
    hide2.style.display="none";
   })

   btn3.addEventListener("click",()=>{
    if(num2.value==x){
      alert("ORDER CONFIRM SUCCESSFULLY")
      document.querySelector("#payment").style.display="none";
      window.location.href="./paymentsuccessful.html"
    }
    else{
      alert("Enter Valid OTP")
      window.location.reload(num);
    }
   })
    

   btn2.addEventListener("click",function(){
    if(emaild.value==""){
        alert("Enter Your Email")
    }
    else{
        alert("Login Successful")

        document.querySelector(".login").style.display="none";
        document.querySelector("#login-button").style.display="none";
    }
   })


   btn4.addEventListener("click",()=>{
    document.querySelector("#product").style.display="none";
  document.querySelector("#product-button").style.display="none";
   })

   btn5.addEventListener("click",function(){
    alert("ORDER CONFIRM SUCCESSFULLY")
    window.location.href="./paymentsuccessful.html"
   })
   btn6.addEventListener("click",function(){
    alert("ORDER CONFIRM SUCCESSFULLY")
    window.location.href="./paymentsuccessful.html"
   })

 btn.addEventListener("click",function(){
    let obj={
        email:emaild.value,
        name:named.value,
        number:numberd.value,
        pincode:pincoded.value,
        location:locationd.value,
        message:messaged.value,
        city:cityd.value,
        state:stated.value,
        landmark:landmarkd.value,
        alternateno:altnumd.value,
       }
       if(emaild.value==="" || named.value==="" || numberd.value==="" || pincoded.value==="" || locationd.value==="" || cityd.value===""){
        alert("Enter Your Details")
        }
        else if(numberd.value.length!=10){
        alert("Enter valid number")
        }
        else if(numberd.value.length==10){
          let t=duplicate(numberd.value);
          if(t){
            alert("Number is already registered")
          }
          else{
        alert("Signup Successful")
        LS.push(obj);
        localStorage.setItem("details",JSON.stringify(LS));
        //window.location.href = "./login.html"
        
          document.querySelector("#addr-button").style.display="none";
          document.querySelector("#addr").style.display="none";
        }  
      }        
 })
 function duplicate(a){
    for(let k=0;k<LS.length;k++){
      console.log(LS[k].number)
      if(LS[k].number==a){
        return true;
      }
    }
    return false;
  }
   
}
 
function openform(){
    document.querySelector(".login").style.display="block";
    document.querySelector("#login-button").style.display="inline";
}

function openform2(){
    document.querySelector("#addr").style.display="block";
    document.querySelector("#addr-button").style.display="inline";
}

function openform3(){
  document.querySelector("#product").style.display="block";
  document.querySelector("#product-button").style.display="inline";
}
function openform4(){
  document.querySelector("#payment").style.display="block";
  document.querySelector("#product-button").style.display="inline";
}