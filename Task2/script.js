// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let country = document.getElementById("country").value;
  let message = document.getElementById("message").value.trim();

  let error = document.getElementById("formError");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^[0-9]{10}$/;

  if (!name || !email || !phone || !subject || !country || !message) {
    error.textContent = "⚠️ Please fill all fields!";
    return;
  }

  if (!emailPattern.test(email)) {
    error.textContent = "⚠️ Invalid email!";
    return;
  }

  if (!phonePattern.test(phone)) {
    error.textContent = "⚠️ Invalid phone number!";
    return;
  }

  error.style.color = "#4ade80";
  error.textContent = "✅ Message sent!";
  this.reset();
});


// TASKS
function addTask() {
  let input = document.getElementById("todoInput");
  let task = input.value.trim();

  if (!task) return;

  let div = document.createElement("div");
  div.className = "task";

  div.innerHTML = `
    <span>${task}</span>
    <button onclick="this.parentElement.remove()">X</button>
  `;

  document.getElementById("todoList").appendChild(div);
  input.value = "";
}


// IMAGE GALLERY
function addImage() {
  let input = document.getElementById("imageURL");
  let url = input.value.trim();

  if (!url) return;

  let img = document.createElement("img");
  img.src = url;

  img.onerror = () => {
    alert("Invalid image URL");
    img.remove();
  };

  document.getElementById("galleryBox").appendChild(img);
  input.value = "";
}