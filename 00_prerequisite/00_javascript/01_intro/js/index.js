

document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent clicked");
    },true); // By default it is false and it is bubbling, but we can change it to capturing by adding true as the third argument.

document.querySelector("#parent")
    .addEventListener("click", () => {
        console.log("Parent clicked");
    },true); // By default it is false and it is bubbling, but we can change it to capturing by adding true as the third argument.

document.querySelector("#child")
    .addEventListener("click", () => {
        console.log("Child clicked");
    },true); // By default it is false and it is bubbling, but we can change it to capturing by adding true as the third argument.