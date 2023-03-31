// fetch("http://localhost:1999/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     console.log(json);
//     getCard(json);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function getCard(makeCardArr) {
//   let x = "";
//   makeCardArr.map((item) => {
//     x += `
//       <div class="card-list">
//         <div class="card" data-id="${item.id}">
//           <div class="card-img">
//             <img src="${item.image}" alt="image_error" />
//           </div>
//           <div class="card-body">
//             <div class="card-title">${item.name}</div>
//             <div class="card-title">₹ ${item.price}</div>
//             <div class="card-brandName">${item.brandName}</div>
//             <a href="#" data-id="${item.id}" class="card-link">Edit</a>
//             <a href="#" data-id="${item.id}" class="card-link-del">Delete</a>
//           </div>
//         </div>
//       </div>`;
//   });
//   mainSection.innerHTML = x;

//   const editLink = document.querySelectorAll(".card-link");
//   editLink.forEach((elementbtn) => {
//     elementbtn.addEventListener("click", (event) => {
//       event.preventDefault();
//       console.log(event.target.dataset.id);
//       let id = event.target.dataset.id;
//       updateAllPopulate(id);
//     });
//   });
// }

window.addEventListener("load", () => {
  fetchProduct();
});

let cardsContainer = document.getElementById("data-list-wrapper");
const sortSelect = document.querySelector("#sort");
const filterSelect = document.querySelector("#filter");
const searchInput = document.querySelector("#search");
const editInput = document.querySelector("#edit");

async function fetchProduct() {
  try {
    const response = await fetch("http://localhost:1999/products");
    const users = await response.json();
    renderCards(users);
    return users;
  } catch (error) {
    console.error(error);
  }
}

function renderCards(users) {
  cardsContainer.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = `${user.image}`;
    image.alt = `${user.name}'s profile picture`;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = user.name;
    card.appendChild(name);

    const age = document.createElement("p");
    age.textContent = `Age: ${user.age}`;
    card.appendChild(age);

    const batch = document.createElement("p");
    batch.textContent = `Batch: ${user.batch}`;
    card.appendChild(batch);

    const profession = document.createElement("p");
    profession.textContent = `Profession: ${user.profession}`;
    card.appendChild(profession);

    const deleteIcon = document.createElement("button");
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.textContent = "Delete";
    deleteIcon.addEventListener("click", async () => {
      let del_id = user.id;
      try {
        const response = await fetch(
          `http://localhost:1999/products/${del_id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          card.remove(); //this will remove the card
        }
      } catch (error) {
        console.error(error);
      }
      fetchUsers();
    });
    card.appendChild(deleteIcon);

    const editIcon = document.createElement("button");
    const aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    aTag.setAttribute("data-id", user.id);
    // aTag.setAttribute("class", cardLink);
    aTag.classList.add("cardLink");
    aTag.innerText = "Edit";

    editIcon.addEventListener("click", function (e) {
      const editLink = document.querySelectorAll(".cardLink");
      console.log(editLink);
      editLink.forEach((elementbtn) => {
        elementbtn.addEventListener("click", (event) => {
          event.preventDefault();
          let id = event.target.dataset.id;
          console.log(id);
          updateAllPopulateProduct(id);
        });
      });
    });
    editIcon.appendChild(aTag);

    card.appendChild(editIcon);

    cardsContainer.appendChild(card);
  });
}

//  add products
let productNameInput = document.getElementById("product-name");
let productImgInput = document.getElementById("product-image");
let productDescInput = document.getElementById("product-desc");
let productBrandInput = document.getElementById("product-brand");
let productPriceInput = document.getElementById("product-price");
let productCategoryInput = document.getElementById("product-category");
let productCreateBtn = document.getElementById("add-product");

productCreateBtn.addEventListener("click", () => {
  let productName = productNameInput.value;
  let productImg = productImgInput.value;
  let productDesc = productDescInput.value;
  let productBrand = productBrandInput.value;
  let productPrice = productPriceInput.value;
  let productCategory = productCategoryInput.value;

  let newEmpObj = {
    name: productName,
    image: productImg,
    description: productDesc,
    brandName: productBrand,
    price: productPrice,
    category: productCategory,
  };

  console.log(newEmpObj);
  fetch("http://localhost:1999/products", {
    method: "POST",
    body: JSON.stringify(newEmpObj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      fetchProduct(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//  update products
let updateproductNameInput = document.getElementById("update-product-name");
let updateproductImgInput = document.getElementById("update-product-image");
let updateproductDescInput = document.getElementById("update-product-desc");
let updateupdateproductBrandInput = document.getElementById(
  "update-product-brand"
);
let updateproductPriceInput = document.getElementById("update-product-price");
let updateproductCategoryInput = document.getElementById(
  "update-product-category"
);
let updateproductCreateBtn = document.getElementById("update-add-product");

// function updateAllPopulateProduct(changeid) {
//   fetch(`http://localhost:1999/products/${changeid}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // Populate the input fields with the extracted values
//       updateproductNameInput.value = data.name;
//       updateproductImgInput.value = data.imege;
//       updateproductDescInput.value = data.description;
//       updateproductBrandInput.value = data.brandName;
//       updateproductPriceInput.value = data.price;
//       updateproductCategoryInput.value = data.category;
//       changeupdatesProducts();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// function changeUpdatesValue() {
//   updateproductCreateBtn.addEventListener("click", function () {
//     let updateproductName = updateproductNameInput.value;
//     let updateproductImg = updateproductImgInput.value;
//     let updateproductDesc = updateproductDescInput.value;
//     let updateproductBrand = updateproductBrandInput.value;
//     let updateproductPrice = updateproductPriceInput.value;
//     let updateproductCategory = updateproductCategoryInput.value;

//     let newUpdatedProductObj = {
//       name: updateproductName,
//       image: updateproductImg,
//       description: updateproductDesc,
//       brandName: updateproductBrand,
//       price: updateproductPrice,
//       category: updateproductCategory,
//     };

//     fetch(`http://localhost:1999/products/${changeid}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUpdatedProductObj),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         fetchProduct(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// }

// sortSelect.addEventListener("change", function (e) {
//   const sortOrder = e.target.value;

//   fetch("http://localhost:1999/products")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       const sortedUsers = sortUsersByAge(users, sortOrder);
//       renderCards(sortedUsers);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// function sortUsersByAge(users, sortOrder) {
//   console.log(users);
//   if (sortOrder === "asc") {
//     users.sort((a, b) => a.age - b.age);
//   } else if (sortOrder === "desc") {
//     users.sort((a, b) => b.age - a.age);
//   }
//   return users;
// }

// filterSelect.addEventListener("change", function (e) {
//   const selectedBatch = e.target.value;

//   fetch("http://localhost:1999/products")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       const filteredUsers = filterUsersByBatch(users, selectedBatch);
//       renderCards(filteredUsers);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// function filterUsersByBatch(users, batchFilter) {
//   if (batchFilter === "") {
//     return users;
//   } else {
//     return users.filter((user) => user.batch === batchFilter);
//     searchQuery;
//   }
// }
searchInput.addEventListener("input", function (e) {
  const searchQuery = e.target.value.toLowerCase().trim();

  fetch("http://localhost:1999/products")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const filteredUsers = searchUsersByName(users, searchQuery);
      renderCards(filteredUsers);
    })
    .catch((error) => {
      console.error(error);
    });
});

function searchUsersByName(users, searchQuery) {
  if (searchQuery === "") {
    return users;
  } else {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery) ||
        user.profession.toLowerCase().includes(searchQuery)
    );
  }
}
