const form = document.getElementById("form");
const msg = document.getElementById("msg");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  inputs.forEach(input => {
    input.removeAttribute("aria-invalid");
    input.style.borderColor = "";

    // Kolla om tomt
    if (!input.value.trim()) {
      input.setAttribute("aria-invalid", "true");
      input.style.borderColor = "#ff3333";  ; 
      hasError = true;
    }
  });

  if (hasError) {
    msg.textContent = "Alla fält måste fyllas i!";
    msg.style.color = "#ff3333";
  } else {
    msg.textContent = "Tack för registreringen!";
    msg.style.color = "#33cc33";

    inputs.forEach(input => {
      input.style.borderColor = "#33cc33";
    });
  }
});