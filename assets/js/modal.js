var modal={
    MODAL_IMG :document.querySelector(".hamburger"),
    CLOSE_IMG : document.querySelector(".close"),
    BODY : document.querySelector("body"),
    MODAL : document.querySelector(".modal").classList,
    HEADER : document.querySelector(".container > header"),
    MODAL_CLASS : "hide",
    showModal(e){
        modal.BODY.style.overflow = "hidden";
        modal.MODAL.remove(modal.MODAL_CLASS);
        modal.HEADER.style.visibility="hidden";
    },
    hideModal :(e) => {
        modal.BODY.style.overflow = "visible";
        modal.MODAL.add(modal.MODAL_CLASS);
        modal.HEADER.style.visibility="visible";
    }
};
modal.MODAL_IMG.addEventListener("click", modal.showModal);
modal.CLOSE_IMG.addEventListener("click",modal.hideModal)