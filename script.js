const buttons=document.querySelectorAll('.pick');
const scoreEl=document.getElementById('score');
const main=document.getElementById('main');
const selection=document.getElementById('selection');
const reset=document.getElementById('reset');
const user_select =document.getElementById('user-select');
const computer_select= document.getElementById('computer-select');
const win=document.getElementById('win');

const openbtn=document.getElementById('open');
const closebtn=document.getElementById('close');
const modal=document.getElementById('modal');


const choices=['paper','rock','scissors'];

let score=0;
let userChoice=undefined;

buttons.forEach((button)=>{
    button.addEventListener('click',() =>{
        userChoice=button.getAttribute('data-choice');
           main.style.display='none';
           selection.style.display='flex';
        checkWinner();
    });
});
 

reset.addEventListener('click',()=> {
    main.style.display='flex';
    selection.style.display='none';
  });


  openbtn.addEventListener('click',()=> {
    modal.style.display='flex';
    
  });


  closebtn.addEventListener('click',()=> {
    
    modal.style.display='none';
  });
function checkWinner() 
{
    const computerChoice = pickRandomChoice();
       

       updateSelection(user_select,userChoice);
       updateSelection(computer_select,computerChoice);


     if(userChoice=== computerChoice){
         //draw
         win.innerText='DRAW';
     }
     else if(
         (userChoice=== 'paper' &&  computerChoice=== 'rock') ||
         (userChoice=== 'rock ' && computerChoice=== 'scissors') ||
         (userChoice==='scissors' && computerChoice==='paper')
     ){
     
         //user won
         updateScore();
         win.innerText='Win'
     }
     else{
         //user lose
         
         win.innerText='Lose';
     }

}

function updateScore(){
    score += 1;

    scoreEl.innerText=score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() *choices.length)];
}

function updateSelection(selectionEl,choice){

    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');


    //update image
    const img=selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src=`./images/icon-${choice}.svg`;
    img.alt=choice;

}