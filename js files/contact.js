const userName = document.getElementById("name");
let emailInput = document.getElementById("email");
let massgeInput = document.getElementById("massage");
let checkbox = document.getElementById("checkbox");
let button = document.getElementById("button");

button.addEventListener("click", function ()  {
    const userInput = userName.value;
    console.log(userInput);
    let emailInput = email.value;
    let massageInput = massage.value;
    console.log(emailInput);
    console.log(massageInput);
});

function thankYouNote() {
    alert("Thank you for your massage");
}
button.addEventListener("click", thankYouNote);


