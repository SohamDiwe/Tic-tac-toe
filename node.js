let boxes = document.querySelectorAll(".dive");
let newGamebtn = document.querySelector(".new-game-btn");
let resetbtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true; // player0, playerx
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disableBoxes = () => {
    for (let dive of boxes) {
        dive.disabled = true;
    }
};

const enableBoxes = () => {
    for (let dive of boxes) {
        dive.disabled = false;
        dive.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner !!!!", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((dive) => {
    dive.addEventListener("click", () => {
        console.log("you have clicked me!");
        if (turno) {
            dive.innerText = "O";
            turno = false;
        } else {
            dive.innerText = "X";
            turno = true;
        }
        dive.disabled = true;
        checkwinner();
    });
});

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);