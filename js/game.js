const space = document.getElementById("space");
for (let i = 0; i < 500; i++) {
    let star = document.createElement("div");
    star.className = "star";
    let size = Math.random() * 3;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.animationDuration =
        (Math.random() * 50 + 20) + "s";

    space.appendChild(star);
}