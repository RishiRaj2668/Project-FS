document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();

  const em = document.querySelector(".email").value.trim();
  const pw = document.querySelector(".password").value.trim();

  if (em !== "asingh49_be23@thapar.edu" || pw !== "aviavi123") {
    alert("Wrong Credentials");
  } else {
    window.location.href = "selling.html";
  }
});

document.querySelector(".btni").addEventListener("click", function (e) {
  e.preventDefault();

  const em = document.querySelector(".email").value.trim();
  const pw = document.querySelector(".password").value.trim();

  if (em !== "asingh49_be23@thapar.edu" || pw !== "aviavi123") {
    alert("Wrong Credentials");
  } else {
    window.location.href = "selling.html";
  }
});
