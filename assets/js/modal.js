const MODAL_IMG = document.querySelector(".hamburger");
const CLOSE_IMG = document.querySelector(".close");
const BODY = document.querySelector("body");
const MODAL = document.querySelector(".modal").classList;
const HEADER = document.querySelector(".container > header");
const MODAL_CLASS = "hide";
const showModal = (e) => {
    BODY.style.overflow = "hidden";
    MODAL.remove(MODAL_CLASS);
    HEADER.style.visibility="hidden";
};
const hideModal = (e) => {
    BODY.style.overflow = "visible";
    MODAL.add(MODAL_CLASS);
    HEADER.style.visibility="visible";
};
MODAL_IMG.addEventListener("click", showModal);
CLOSE_IMG.addEventListener("click",hideModal)