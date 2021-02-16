function randomNumber(minDice, maxDice) {
    return Math.floor(Math.random() * (maxDice - minDice + 1)) + minDice;
}

let random1 = randomNumber(1, 6);
let random2 = randomNumber(1, 6);

const dice1 = document.querySelector(".img1");
dice1.setAttribute("src", `./images/dice${random1}.png`);

const dice2 = document.querySelector(".img2");
dice2.setAttribute("src", `./images/dice${random2}.png`);

let headTitle = document.querySelector("h1");

if (random1 > random2) {
    headTitle.innerHTML = "Plalyer 1 Win!";
} else if (random1 < random2) {
    headTitle.innerHTML = "Plalyer 2 Win!";
} else {
    headTitle.innerHTML = "Draw!";
}
