const container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

// <-------for signup------>
const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", () => {
  const username = document.getElementById("Username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:1999/users", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Welcome to FreeCraft!");
        return response.json();
      } else {
        throw new Error("Wrong username, email, or password");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      alert(error.message);
    });
});


// <--------for signin---------->

let username = document.getElementById("usernm");
let password = document.getElementById("pass");
let signinBtn = document.getElementById("signin-btn");
let loginSucessfully = document.getElementById("sign-successful");
let clickHereMassageBtn = document.getElementById("show");
let card = document.getElementById("Card");

signinBtn.addEventListener("click", () => {
  let userNameValue = username.value;
  let passwordValue = password.value;

  if (userNameValue == "" && passwordValue == "") {
    alert("Please enter your username and password");
  } else if (userNameValue == "") {
    alert("Please enter your username");
  } else if (passwordValue == "") {
    alert("Please enter your password");
  } else {
    signin({
      username: userNameValue,
      password: passwordValue
    });
  }
});

function signin(obj) {
  console.log(obj)
  fetch("http://localhost:1999/users",{
    method:"GET",
    headers:{
        "Content-Type": "application/json",
      }
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      let found = false;
      data.forEach((e) => {
        if (e.username == obj.username && e.password == obj.password) {
          found = true;
      
        }
        console.log(e.username,e.password);
      });
      if (found) {
        alert("Sigin successful");
        window.open(location.href = "../index.html");
      } else {
        alert("Wrong username or password");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

