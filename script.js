const colors = [
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "white",
    "White",
    "white",
    "white",
    "green",
    "blue",
    "magenta",
    "hotpink",
    "purple",
    "yellow",
    "orange"
];



const space = document.getElementById("space");


for (let i = 0; i < 25; i++) {

    let star = document.createElement("div");

    star.className = "star";


    let color = colors[Math.floor(Math.random() * colors.length)];

    star.style.backgroundColor = color;

    star.style.boxShadow = 
        `0 0 8px ${color}`;


    star.style.width = "3px";

    star.style.height = "3px";


    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 150 + "%";


    star.style.animationDuration =
        Math.random() * 100 + 150 + "s";


    space.appendChild(star);


    twinkle(star);

}



function twinkle(star) {

    let time = Math.random() * 3000 + 1000;


    setTimeout(() => {


        let color = colors[Math.floor(Math.random() * colors.length)];


        star.style.opacity = Math.random() * 0.8 + 0.2;


        star.style.backgroundColor = color;


        star.style.boxShadow =
            `0 0 8px ${color}`;


        twinkle(star);


    }, time);

}