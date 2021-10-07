const FORM = document.querySelector("form");
const MAIL = document.getElementsByName("mail")[0];
const INPUT_CONTAINER = document.querySelector(".input-and-error");
const BUTTON = FORM.querySelector("button");
const CLASS_NAME = "error";
const addClass = (el = INPUT_CONTAINER, c = CLASS_NAME) => {
    el.classList.add(c);
};
const removeClass=(el = INPUT_CONTAINER, c = CLASS_NAME) => {
    el.classList.remove(c);
};
const validationFailed = (e) => {
    e.preventDefault();
    addClass();
}, validate = () => {
    let valid = FORM.checkValidity();
    if (valid) removeClass();
    return valid;
}, submitHandler = (e) => {
    e.preventDefault();
    console.log(`Submited on ${MAIL.value}`);
    MAIL.value = "";
}, clickHandler = (e) => {
        e.preventDefault();
    if (validate())
        FORM.submit();
};
MAIL.addEventListener("invalid", validationFailed);
MAIL.addEventListener("blur", (e) => { if (MAIL.value !== '') validate(); else removeClass();});
BUTTON.addEventListener("keypress", clickHandler);
FORM.addEventListener("submit", submitHandler);
