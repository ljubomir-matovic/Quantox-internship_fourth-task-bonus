var form = {
    FORM : document.querySelector("form"),
    MAIL : document.getElementsByName("mail")[0],
    INPUT_CONTAINER : document.querySelector(".input-and-error"),
    CLASS_NAME : "error",
};
form.BUTTON = form.FORM.querySelector("button");
form.addClass = (el = form.INPUT_CONTAINER, c = form.CLASS_NAME) => {
    el.classList.add(c);
};
form.removeClass=(el = form.INPUT_CONTAINER, c = form.CLASS_NAME) => {
    el.classList.remove(c);
};
form.validationFailed = (e) => {
    e.preventDefault();
    form.addClass();
}, form.validate = () => {
    let valid = form.FORM.checkValidity();
    if (valid) form.removeClass();
    return valid;
}, form.submitHandler = (e) => {
    e.preventDefault();
    console.log(`Submited on ${form.MAIL.value}`);
    form.MAIL.value = "";
}, form.clickHandler = (e) => {
        e.preventDefault();
    if (form.validate())
        form.FORM.submit();
};
form.MAIL.addEventListener("invalid", form.validationFailed);
form.MAIL.addEventListener("blur", (e) => { if (form.MAIL.value !== '') form.validate(); else form.removeClass();});
form.BUTTON.addEventListener("keypress", form.clickHandler);
form.FORM.addEventListener("submit", form.submitHandler);
