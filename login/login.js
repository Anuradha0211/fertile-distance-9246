


const sidebar=document.querySelector(".sidebar");
// const cross=document.querySelector(".fa-xmark");
// const black=document.querySelector(".black");
// const sidebtn=document.querySelector(".second-1");

// sidebtn.addEventListener("click",()=>{
    // sidebar.classList.add("active");
    // cross.classList.add("active");
    // black.classList.add("active");
// })
// cross.addEventListener("click",()=>{
    // sidebar.classList.remove("active");
    // cross.classList.remove("active");
    // black.classList.remove("active");
// })

// document.querySelector("#cross").addEventListener("click",function(){
//     document.querySelector('.fa-solid').classList.add("active");
// });
// document.querySelector("#cross").addEventListener("click",function(){
//     document.querySelector('.fa-solid .cros').classList.remove("active");
// });
let auth = localStorage.getItem('auth')||false;


const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:1999/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
         auth = email;
         localStorage.setItem('auth',email);  
        alert("Login successful!");
        window.location.href = "../index.html"
      } else {
        alert("Wrong email or password!");
      }
    })
    .catch(error => {
      alert("An error occurred: " + error);
    });
});

// function display(){
//   window.location.href = "../index.html";
// }
