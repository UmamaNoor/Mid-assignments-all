$(document).ready(function(){

  $("#submitBtn").click(function(){

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();

    let isValid = true;

    // Name validation
    if(name === ""){
      $("#nameError").text("Name is required");
      isValid = false;
    } else {
      $("#nameError").text("");
    }

    // Email validation
    if(email === ""){
      $("#emailError").text("Email is required");
      isValid = false;
    } 
    else if(!email.includes("@") || !email.includes(".")){
      $("#emailError").text("Enter valid email");
      isValid = false;
    }
    else {
      $("#emailError").text("");
    }

    // Success
    if(isValid){
      alert("Form Submitted Successfully ✅");
      $("#name").val("");
      $("#email").val("");
    }

  });

});