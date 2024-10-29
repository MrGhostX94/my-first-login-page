// This is the Js code for the login form
alert("You are welcome to my code");
document.getElementById("myBtn").onclick = ()=> {
    var userInput = document.getElementById("myUser").value;
    var userInput1 = document.getElementById("myPass").value;
    if (userInput === "Ghostx" && userInput1 === "695293") {
        window.location.href = "./success.html";
        alert("passcode correct!")
    } else {
        window.location.href = "./index.html";
        alert("passcode incorrect!")
    }
};