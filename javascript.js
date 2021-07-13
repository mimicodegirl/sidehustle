let increment = document.querySelector("#increment");
let decrementr = document.querySelector("#decrement");
let CounterValue = document.querySelector("#countervalue");

let counter = 0;

increment.addEventListener("click", () ={
    counter + 1;
    CounterValue.innertext = counter;
});

decrement.addEventListener("click", ()={
    counter -1;
    CounterValue.innertext = counter;
});