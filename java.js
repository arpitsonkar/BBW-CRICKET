let bat = document.querySelector(".bat");
let ball = document.querySelector(".ball");
let stump = document.querySelector(".stump");
let wld = document.querySelector("h2");
let computerChoice;

let scoreStr = localStorage.getItem("Score");

let score = JSON.parse(scoreStr) || {
  win: 0,
  lose: 0,
  draw: 0,
};

// if(scoreStr !== undefined){
//   score = JSON.parse(scoreStr);
// }else{
//   score = {
//   win: 0,
//   lose: 0,
//   draw: 0,
//   };
// };

function gamex() {
  let mx = Math.random() * 3;
  if (mx >= 0 && mx < 1) {
    computerChoice = "Bat";
  } else if (mx >= 1 && mx < 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
}

bat.addEventListener("click", function () {
  gamex();

  if (computerChoice === "Bat") {
    score.draw++;
    alert(
      `You choose Bat and Computer choice is ${computerChoice} so It's Draw`
    );
  } else if (computerChoice === "Ball") {
    score.win++;
    alert(`You choose Bat and Computer choice is ${computerChoice} so You Win`);
  } else {
    score.lose++;
    alert(
      `You choose Bat and Computer choice is ${computerChoice} so You lose`
    );
  }
  resultx();
  updateScoreOnScreen();
});

ball.addEventListener("click", function () {
  gamex();

  if (computerChoice === "Bat") {
    score.lose++;
    alert(
      `You choose Ball and Computer choice is ${computerChoice} so You lose`
    );
  } else if (computerChoice === "Ball") {
    score.draw++;
    alert(
      `You choose Ball and Computer choice is ${computerChoice} so It's Draw`
    );
  } else {
    score.win++;
    alert(
      `You choose Ball and Computer choice is ${computerChoice} so You Win`
    );
  }
  resultx();
  updateScoreOnScreen();
});

stump.addEventListener("click", function () {
  gamex();

  if (computerChoice === "Bat") {
    score.win++;
    alert(
      `You choose Stump and Computer choice is ${computerChoice} so You Win`
    );
  } else if (computerChoice === "Ball") {
    score.lose++;
    alert(
      `You choose Stump and Computer choice is ${computerChoice} so You lose`
    );
  } else {
    score.draw++;
    alert(
      `You choose Stump and Computer choice is ${computerChoice} so It's Draw`
    );
  }
  resultx();
  updateScoreOnScreen();
});

function resultx() {
  localStorage.setItem("Score", JSON.stringify(score));
}

function updateScoreOnScreen() {
  wld.innerHTML = `Wins: ${score.win}, Draws: ${score.draw}, Losses: ${score.lose},`;

}

let resetu = document.querySelector(".resetu");

  resetu.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });