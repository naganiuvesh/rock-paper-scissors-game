let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

let changText = document.querySelector(".result");
let youPoint = document.querySelector(".you-point");
let youScore = 0;
let compPoint = document.querySelector(".comp-point");
let compScore = 0;

rock.addEventListener("click", () => {
    let comp = Math.random();
    changText.classList.remove("lost", "win");
    if(comp <= 0.33333){
        changText.textContent = "It was Draw.";
    }else if(comp <= 0.6666){
        changText.classList.add("win");
        changText.textContent = "You won! rock beats scissor";
        youScore++;
        youPoint.textContent = youScore;
    }else{
        changText.classList.add("lost");
        changText.textContent = "You lost. paper beats rock"
        compScore++;
        compPoint.textContent = compScore;
    }
});
paper.addEventListener("click", () => {
    let comp = Math.random();
    changText.classList.remove("lost", "win");
    if(comp <= 0.33333){
        changText.textContent = "You won! paper beats rock";
        youScore++;
        youPoint.textContent = youScore;
        changText.classList.add("win");
    }else if(comp <= 0.6666){
        changText.textContent = "It was Draw.";
    }else{
        changText.textContent = "You lost. scissor beats paper"
        compScore++;
        compPoint.textContent = compScore;
        changText.classList.add("lost");
    }
});
scissor.addEventListener("click", () => {
    let comp = Math.random();
    changText.classList.remove("lost", "win");
    if(comp <= 0.33333){
        changText.textContent = "You lost. rock beats scissor"
        compScore++;
        compPoint.textContent = compScore;
        changText.classList.add("lost");
    }else if(comp <= 0.6666){
        changText.textContent = "You won! scissor beats paper";
        youScore++;
        youPoint.textContent = youScore;
        changText.classList.add("win");
    }else{
        changText.textContent = "It was Draw.";
    }
});
