
// let btn =  document.getElementsByClassName("btn");

// btn.addEventListener("click",function generateOTP() {
//     let Btn=btn.value
//     let obj={Btn}
//      // Declare a digits variable 
//     // which stores all digits
//     var digits = '0123456789';
//     let OTP = '';
//     for (let i = 0; i < 6; i++ ) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//     }
//     return OTP;

 
// // console.log("OTP of 6 digits: ")
// // console.log( generateOTP() );
// });

// generateOTP();
          

let email = document.getElementById("email");
let password = document.getElementById("password")
let Login_Btn = document.getElementById("login-btn")
// let loginSucessfully = document.getElementById("login-sucessfully");
// let clickHereMassageBtn = document.getElementById("show-here");
let card = document.getElementById("card");


Login_Btn.addEventListener("click", ()=>{
    let Email = email.value;
    let Password = password.value;

    let obj = {
        email: Email,
        password: Password
    }

    if(obj.email == "" && obj.password == ""){
        alert("wrong credentials");
    }else if(obj.email==""){
        alert("Invalid Email");
    }else if(obj.password == ""){
        alert("Invalid password");
    }else{
        login(obj);
    }
    
})

function login(obj){
    fetch(`https://test1-h9kd.onrender.com/users`)
    .then((res)=> res.json())
    .then((data)=>{
        let count = 0;
        data.forEach((e) => {
            if(e.email == obj.email && e.password == obj.password){
                alert("login SucessfSully");
                display();
            }else{
                count++;
            }
        });
        if(count == data.length){
            alert("wrong credentials");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function display(){
    window.location.href = "/index.html";
}
   

// const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
// const black=document.querySelector(".black");
// const sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    // sidebar.classList.add("active");
    cross.classList.add("active");
    // black.classList.add("active");
})
cross.addEventListener("click",()=>{
    // sidebar.classList.remove("active");
    cross.classList.remove("active");
    // black.classList.remove("active");
})