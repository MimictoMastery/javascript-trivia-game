const form = document.getElementById("createAccountForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;

    localStorage.setItem("playerName", username);

    window.location.href = "prologue.html";
});