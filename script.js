document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    Sn: e.target.sn.value,
    userName: e.target.uname.value,
  };

  fetch("https://script.google.com/macros/s/AKfycbwN-jAqelTAifmL6lkmvlJ53tKior6QgCVWQoSD5dCfZ0wABs6pzOzu9cetyVCzvDJr/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.text())
  .then(res => alert("Form submitted successfully!"))
  .catch(err => alert("Error: " + err));
});