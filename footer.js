document.getElementById("toggle-copyright-form").addEventListener("click", function() {
  var copyrightForm = document.querySelector(".copyright-form");
  if (window.getComputedStyle(copyrightForm).display === "none") {
      copyrightForm.style.display = "block";
  } else {
      copyrightForm.style.display = "none";
  }
});