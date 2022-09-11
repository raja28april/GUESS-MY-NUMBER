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
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
    
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ no number';
    }
})