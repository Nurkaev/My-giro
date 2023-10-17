var btn_call = document.querySelector('#btn_call');

btn_call.addEventListener('click', function (e) {
  document.getElementById("myForm").style.display = "block";
});

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

