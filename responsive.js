const modal = document.querySelector("dialog");
const pictures = document.getElementById("pictures");
const pictureHolder = modal.querySelector("img");
const closeModal = modal.querySelector(".close-viewer");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

pictures.addEventListener("click", (event) => {
    if (event.target.src) {
        pictureHolder.src = event.target.src;
        modal.showModal();
    }
});

closeModal.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.close();
    }
});

menu.addEventListener("click", () => {
    nav.style.display =  nav.style.display == "flex" ? "" : "flex";
});
