let clickable = document.getElementsByClassName("question");
const showElement = (e) => {
    if (!e.target.classList.contains("active-tab")) {
        let activeQuestions = document.querySelectorAll(".active-tab");
        [...activeQuestions].forEach((element) => {
            element.classList.remove("active-tab");
        });
    }
        let parent = e.target.parentElement.parentElement;
        let classLists = [parent.querySelector("img.question").classList, parent.querySelector(".answer").classList, parent.querySelector("p.question").classList];
        classLists.forEach((c) => {
            if (c.contains("active-tab"))
                c.remove("active-tab");
            else
                c.add("active-tab");
        });
};
[...clickable].forEach(element => {
    element.addEventListener("click", showElement);
});