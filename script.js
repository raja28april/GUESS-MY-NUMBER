'use strict';
// console.log(
// document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉 Correct number';
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.score').textContent =10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc((Math.random()*20)+1);
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
    
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ no number';
    }else if(guess===secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct number';
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = '📈 high';
            score--;
            document.querySelector('.score').textContent =score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent =0;
        }
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = '📉 low';
            score--;
            document.querySelector('.score').textContent =score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent =0;
        }
    }
})