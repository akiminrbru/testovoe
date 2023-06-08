let burger = document.querySelector(".burger");
let open = document.querySelector(".mobileHeader__open");
let close = document.querySelector(".mobileHeader__close");

open.addEventListener("click", () => {
    burger.classList.remove("close");
    burger.classList.add("open");
    close.classList.remove("closeBtn");
    open.classList.add("closeBtn");
});

close.addEventListener("click", () => {
    burger.classList.remove("open");
    burger.classList.add("close");
    open.classList.remove("closeBtn");
    close.classList.add("closeBtn");
});
