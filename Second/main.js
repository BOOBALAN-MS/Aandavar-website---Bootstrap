function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name.trim() === "" && email.trim() === "") {
    alert("Fill these fields");
    return false;
  } else {
    return true;
  }
}
