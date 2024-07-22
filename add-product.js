//import axios from "axios";

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // const key1 = document.getElementById("key1").value;
    // const key2 = document.getElementById("key2").value;
    const quantity = document.querySelector("#quantity").value;
    const description = document.querySelector("#description").value;
    const name = document.querySelector("#name").value;
    const brand = document.querySelector("#brand").value;
    const price = document.querySelector("#price").value;

    const data = {
      quantity: quantity,
      description: description,
      name: name,
      brand: brand,
      price: price,
    };

    axios
      .post("http://localhost:8085/admin/product", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
