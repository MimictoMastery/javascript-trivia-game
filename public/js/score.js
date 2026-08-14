
async function loadScores() {
   const response = await fetch("/scores");
const scores = await response.json();
 console.log(scores);
const list = document.getElementById("scores");

    list.innerHTML = "";
scores.forEach(function(player, index) {
  const item = document.createElement("p");
  item.className = "score";
item.innerHTML =
 '<span class="player">' + player.name + '</span>' +
            '<span class="points">' + player.score + '</span>';


        list.appendChild(item);
    });

   
document.getElementById("playAgain").addEventListener("click", function () {
    window.location.href = "../index.html";
});
}

loadScores();



