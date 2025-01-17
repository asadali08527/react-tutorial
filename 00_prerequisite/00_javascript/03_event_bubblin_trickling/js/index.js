

document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent clicked");
    },true);

document.querySelector("#parent")
    .addEventListener("click", () => {
        console.log("Parent clicked");
    },true);

document.querySelector("#child")
    .addEventListener("click", () => {
        console.log("Child clicked");
    },true);