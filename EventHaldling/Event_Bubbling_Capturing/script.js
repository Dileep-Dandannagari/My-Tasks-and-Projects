
document.querySelector("#parent")
    .addEventListener("click", (e) => {
        // e.stopPropagation();
        console.log("Parent clicked!");
    }, true)
document.querySelector("#child")
    .addEventListener("click", (e) => {
        try {
            console.log("Child clicked!");
            e.stopPropagation();
        } catch (err) {
            console.log(err)
        }
    }, true)
document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent clicked!");
    }, true)