const space = document.getElementById("space");

const root = getComputedStyle(document.documentElement);

const colors = [
    root.getPropertyValue("--white"),
    root.getPropertyValue("--cyan"),
    root.getPropertyValue("--green"),
    root.getPropertyValue("--purple"),
    root.getPropertyValue("--pink"),
    root.getPropertyValue("--yellow")
];

for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    let color = colors[Math.floor(Math.random() * colors.length)];

    star.style.backgroundColor = color;

    star.style.boxShadow = 
    `
    0 0 8px ${color},
    0 0 15px ${color}
    `;


    let size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 200 + "%";

    star.style.animationDuration =
        Math.random() * 100 + 150 + "s";

       space.appendChild(star);
    twinkle(star);
}

function twinkle(star) {
    let time = Math.random() * 3000 + 1000;
    setTimeout(() => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        star.style.opacity =
            Math.random() * 0.8 + 0.2;

        star.style.backgroundColor = color;
        star.style.boxShadow =

        `
        0 0 8px ${color},
        0 0 20px ${color}
        `;
        twinkle(star);
    }, time);
}