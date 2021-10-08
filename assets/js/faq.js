var faq = {
    clickable : document.getElementsByClassName("question"),
    showElement(e) {
        if (!e.target.classList.contains("active-faq")) {
            let activeQuestions = document.querySelectorAll(".active-faq");
            [...activeQuestions].forEach((element) => {
                element.classList.remove("active-faq");
            });
        }
        let parent = e.target.parentElement.parentElement;
        let classLists = [
            parent.querySelector("img.question").classList,
            parent.querySelector(".answer").classList,
            parent.querySelector("p.question").classList,
        ];
        classLists.forEach((c) => {
            if (c.contains("active-faq")) c.remove("active-faq");
            else c.add("active-faq");
        });
    }
};
[...faq.clickable].forEach((element) => {
    element.addEventListener("click", faq.showElement);
});
