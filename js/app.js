/*
  For at aktivere et kort, tilføj en css class med navnet active
  eks. object.classList.add("active"); . men husk også at fjerne class hvis 
  kortet ikke matcher. .classList.remove("active");
*/
let flipCard = document.querySelectorAll("figure.card");
let firstClick ="";
let score = 0;
let scoreElement = document.querySelector("#score")

let matches = 0;

const memoryPictureUrls = [
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

//cards shuffle 
function shuffle() {
  let array = memoryPictureUrls
  shuffleArray(array);
  for (let index = 0; index < flipCard.length; index++) {
    flipCard[index].children[0].src = array[index]
  }
}
shuffle()

//card flip (I think, I'm unsure ÓvÒ; )
for (let index = 0; index < flipCard.length; index++) {
  flipCard[index].addEventListener("click", (data) => {

      if(firstClick ==="") {
        firstClick = data.target; 
        data.target.classList.add("active");
      } else {
        console.log(firstClick.children[0].src)
        console.log(data.target.children[0].src)

        //scoringboard 
        if(firstClick.children[0].src === data.target.children[0].src) {
          
          data.target.classList.add("active");
          matches += 1;
          score += 1;
          //Check marks
          let check = document.createElement("i");
          check.classList.add("fa-solid");
          check.classList.add("fa-check");
          data.target.appendChild(check);

          let check2 = document.createElement("i");
          check2.classList.add("fa-solid");
          check2.classList.add("fa-check");

          firstClick.appendChild(check2);
          firstClick ="";
          //confetti
          if(matches == 6){
            confetti.start()
          }
        } else {
          data.target.classList.add("active");
          score -= 1;
          //crad show timer
          setTimeout((firstClick, data) => {
            firstClick.classList.remove("active");
            data.target.classList.remove("active");
          }, 1000, firstClick, data);
          firstClick ="";
        }
      }
      scoreElement.innerText = score;
  });
}

//reset
function reset() {
  for (let index = 0; index < flipCard.length; index++) {
    flipCard[index].classList.remove("active");
  }
  score = 0;
  scoreElement.innerText = score
  matches = 0;
  confetti.stop()
}

// Step 1. Tilføj click event på alle kort holder elemente <figure>.
// Step 2. Tilføj check om 2 billeder som er aktive matcher.

// Ekstra opgaver.
// 1. Indbyg en score som give + point ved korret match, og - point ved forkert.
// 2. Indbyg en reset knap så spillet kan genstrate.
// 3. Udskriv billeder i tilfældig rækkefølge.
/*
eks ved at bruge en array:
const memoryPictureUrls = [
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
];
*/
// 4. Når spillet er forbi, brug confetti.js til at vise confetti på skærmen. Mere info her : https://github.com/abelmoricz/abelmoricz.github.io/tree/9eac02160de7bb57170441a441db96b36e8341d8/confetti.js-master
