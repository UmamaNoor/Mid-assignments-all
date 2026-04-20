$(document).ready(function(){

$("#regForm").on("submit", function(){

$(".error").remove();

let name = $("#name").val();
let email = $("#email").val();
let age = $("#age").val();
let course = $("#course").val();

let valid = true;

// Name check
if(name == ""){
$("#name").after("<div class='error'>Name required</div>");
valid = false;
}

// Email check
if(email == ""){
$("#email").after("<div class='error'>Email required</div>");
valid = false;
}

// Age check
if(age == "" || age < 1){
$("#age").after("<div class='error'>Valid age required</div>");
valid = false;
}

// Course check
if(course == ""){
$("#course").after("<div class='error'>Select course</div>");
valid = false;
}

return valid;

});

});