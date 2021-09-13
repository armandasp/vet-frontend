document.forms.add.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value.trim();
  const dob = e.target.elements.dob.value;
  const client_email = e.target.elements.email.value.trim();

  fetch("http://localhost:3000/v1/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, dob, client_email }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.forms.add.reset();
      alert("data added successfully");
    })
    .catch((e) => console.log(e));
});
