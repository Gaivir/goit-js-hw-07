const counterValue = document.querySelector("#value");

const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");



incrementBtn.addEventListener('click', increment);

function increment(event) {
counterValue.textContent ++;
}

decrementBtn.addEventListener('click', decrement);

function decrement(event) {
    counterValue.textContent --;
}