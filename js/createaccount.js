const form = document.getElementById("createAccountForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    window.location.href = "prologue.html";
});
const button = document.getElementById("beginQuest");

 button.addEventListener("click", () => {

    const username = document.getElementById("username").value;
      localStorage.setItem("playerName", username);

    window.location.href = "../html/prologue.html";

});