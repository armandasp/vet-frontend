function displayBlocks(data) {
  data.forEach((item) => {
    const allBlocks = document.getElementById("blocks");
    const newBlock = document.createElement("div");
    newBlock.setAttribute("class", "block");
    allBlocks.append(newBlock);
    const name = document.createElement("p");
    const info = document.createElement("div");
    info.setAttribute("class", "info");
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    newBlock.append(name, info, buttons);
    const date = document.createElement("p");
    const email = document.createElement("p");
    info.append(date, email);
    const btnOrange = document.createElement("div");
    btnOrange.classList.add("button", "orange");
    const btnWhite = document.createElement("div");
    btnWhite.classList.add("button", "white");
    buttons.append(btnOrange, btnWhite);
    name.textContent = item.name;
    date.textContent = item.dob;
    email.textContent = item.client_email;
    btnOrange.textContent = "VIEW LOG";
    btnWhite.textContent = "DELETE";
    btnWhite.addEventListener("click", () => {
      const delConfim = confirm("Do you want to delete this item?");
      if (delConfim) {
        fetch("http://localhost:3000/v1/pets/" + item.id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            newBlock.remove();
          });
      }
    });
  });
}

fetch("http://localhost:3000/v1/pets")
  .then((res) => res.json())
  .then((data) => displayBlocks(data));
