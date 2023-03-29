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
   let addressd=document.getElementById("address1");
   //let addressdd=document.getElementById("address2");
   let btn=document.getElementById("addr-button");
   let btn2=document.getElementById("login-button");

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
        address:addressd.value
       }
//console.log(stated.innerText)
       if(emaild.value==="" || named.value==="" || numberd.value==="" || pincoded.value==="" || locationd.value==="" || cityd.value===""){
        alert("Enter Your Details")
        }
        else if(numberd.value.length!=10){
        alert("Enter valid number")
        }
        else if(numberd.value.length==10){
          let t=duplicate(numberd.value);
          if(t){
            alert("User is already exist you can directly go on login page")
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

