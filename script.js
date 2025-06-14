$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    let valid = true;
    $("#contactForm input, #contactForm textarea").each(function () {
      if ($(this).val() === "") {
        alert("Please fill out all fields.");
        valid = false;
        return false;
      }
    });
    if (!valid) e.preventDefault();
  });
});
