const btnDecrement = document.querySelectorAll("button")[0];

const btnIncrement = document.querySelectorAll("button")[1];

let counterValue = 0;

btnDecrement.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});

btnIncrement.addEventListener(`click`, (event) => {
    counterValue = counterValue + 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});