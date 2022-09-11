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

let secretNumber = Math.trunc((Math.random()*20)+1);
let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
    
    //when no number
    if(!guess){
        if(guess===0){
            document.querySelector('.message').textContent = '🚫 0 not considered';
        }
        document.querySelector('.message').textContent = '⛔️ no number';
    
    //when wins    
    }else if(guess===secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    
    //when guess is high
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = '📈 high';
            score--;
            document.querySelector('.score').textContent =score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent =0;
        }
    
    //when guess is low
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
});

document.querySelector('.btn').addEventListener('click',function(){
    score =20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor='#422';
    document.querySelector('.number').style.width='15rem';
    secretNumber = Math.trunc((Math.random()*20)+1);

});