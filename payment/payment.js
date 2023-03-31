let LS=JSON.parse(localStorage.getItem("details"));
if(LS==null){
    LS=[]
}
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
  document.querySelector("#payment").style.display="inline-block";
  //document.querySelector("#product-button").style.display="inline";
}