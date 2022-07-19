const x = document.getElementById("password");
const eye = document.getElementById("pw-eye");

function togglePW() {
    if (x.type === "password") {
      x.type = "text";
      eye.classList.toggle('yellow-eye');
      x.focus();
    } else {
      x.type = "password";
      eye.classList.toggle('yellow-eye');
      x.focus();
    }
}