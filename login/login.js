// const loginBtn = document.getElementById("login-btn");

// loginBtn.addEventListener("click", function() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (email && password) {
    
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);

//     alert("Login successful!");
//   } 
//   else if(email){
//     localStorage.setItem("email", email);
//     alert("Enter password");
//   }
//   else if(password){
//     localStorage.setItem("password", password);
//     alert("Enter email");
//   }
//   else {
//     alert("Wrong email or password!");
//   }
// });

// function login(obj){
//     fetch(`http://localhost:1999/users`)
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data);
//         let count = 0;
//         data.forEach((e) => {
//             if(e.email == obj.email && e.password == obj.password){
//                 alert("login SucessfSully");
//                 display();
//             }else{
//                 count++;
//             }
//         });
//         if(count == data.length){
//             alert("wrong credentials");
//         }
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }
// function display(){
//     window.location.href = "/index.html";
// }



// const sidebar=document.querySelector(".sidebar");
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



const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:1999/users",{
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
  body:JSON.stringify()
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
      if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Login successful!");
      } else {
        alert("Wrong email or password!");
      }
    })
    .catch(error => {
      alert("An error occurred: " + error);
    });
});





