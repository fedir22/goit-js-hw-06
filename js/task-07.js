const inputTextRef = document.querySelector("#text");
const inputControlRef = document.querySelector("#font-size-control");
inputControlRef.addEventListener("input", (event) => {
    inputTextRef.style.fontSize = `${event.currentTarget.value}px`
})