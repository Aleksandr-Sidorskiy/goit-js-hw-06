
const btns = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrement = btns.firstElementChild;
const increment = btns.lastElementChild;
let number = 0;

increment.addEventListener("click",function(){
 number += 1;
  value.innerHTML = number;
      }      
);
decrement.addEventListener('click',function() {
  number -= 1;
  value.innerHTML = number;
})