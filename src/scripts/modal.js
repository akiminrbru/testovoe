let openModal = document.querySelector(".openModal");
let openModal2 = document.querySelector(".openModal2");
let closeModal = document.querySelector(".modal__closeImg");
let modalDialog = document.querySelector(".modal__dialog");

let modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
    modal.classList.add("modal__on");
});

openModal2.addEventListener("click", () => {
    modal.classList.add("modal__on");
});

modal.addEventListener("click", () => {
    modal.classList.remove("modal__on");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("modal__on");
});

modalDialog.addEventListener("click", (e) => {
    e.stopPropagation();
});
