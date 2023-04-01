// let email = document.getElementById("email_id");
// let password = document.getElementById("passwords")
// let Login_Btn = document.getElementById("login--btn")
// let loginSucessfully = document.getElementById("login--sucessfully");
// let clickHereMassageBtn = document.getElementById("Show-here");
// let card = document.getElementById("Card");
// let admin = document.getElementById("user_name");


// Login_Btn.addEventListener("click", ()=>{
//     let Email = email.value;
//     let Password = password.value;
//     let Admin = admin.value;

//     let obj = {
//         email: Email,
//         password: Password,
//         admin: Admin
//     }

//     if(obj.email == "" && obj.password == "" && obj.admin == ""){
//         alert("wrong credentials");
//     }else if(obj.admin == ""){
//         alert("Invalid Username");
//     }
//     else if(obj.email==""){
//         alert("Invalid Email");
//     }
//     else if(obj.password==""){
//         alert("Invalid Password");
//     }
//     else{
//         login(obj);
//     }
// })

// function login(obj){
//     console.log(obj);
//     fetch("http://localhost:1999/admin")
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data)
//         data.forEach((e) => {
//             if(e.email == obj.email && e.password == obj.password && e.username == obj.admin){
//                 alert("login Sucessfully");
//                 Window.open(location.href = "/admin/admin.html");
//             }else{
//                 count++;
//             }
//         });
//         if(count==data.length){
//             alert("wrong credentials")
//         }
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }



let username = document.getElementById("user_name");
let password = document.getElementById("passwords");
let loginBtn = document.getElementById("login--btn");
let loginSucessfully = document.getElementById("login--sucessfully");
let clickHereMassageBtn = document.getElementById("Show-here");
let card = document.getElementById("Card");

loginBtn.addEventListener("click", () => {
  let userNameValue = username.value;
  let passwordValue = password.value;

  if (userNameValue == "" && passwordValue == "") {
    alert("Please enter your username and password");
  } else if (userNameValue == "") {
    alert("Please enter your username");
  } else if (passwordValue == "") {
    alert("Please enter your password");
  } else {
    login({
      username: userNameValue,
      password: passwordValue
    });
  }
});

function login(obj) {
  fetch("http://localhost:1999/admin",{
    method:"GET",
    headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify()
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      let found = false;
      data.forEach((e) => {
        if (e.username == obj.username && e.password == obj.password) {
          found = true;
        }
      });
      if (found) {
        alert("Login successful");
        window.open(location.href = "/admin/admin.html");
      } else {
        alert("Wrong username or password");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
