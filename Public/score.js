async function loadScores() {
    const response = await fetch("/scores");
    const scores = await response.json();
    console.log(scores);

    const list = document.getElementById("score-list");

    scores.forEach(player => {
        const item = document.createElement("li");
          item.textContent = `${player.name}: ${player.score}`;
        list.appendChild(item);

    });

}
loadScores();