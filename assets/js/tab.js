let tabs = document.querySelectorAll(".tab");
let currentKey = 0;
const TAB_CONTAINER = document.querySelector(".tab-target");
const H2 = TAB_CONTAINER.querySelector("h2");
const P = TAB_CONTAINER.querySelector("p");
const TAB_IMG = TAB_CONTAINER.querySelector("img");
const ACTIVE_TAB_CLASS = "active-tab";
const TAB_CONTENT = [{ heading: "Bookmark in one click", content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites." },
    {heading:"Intelligent search",content:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."},
    {heading:"Share your bookmarks",content:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."}];
const tabHandler = (e) => {
    let el = e.target;
    let key = Number(el.getAttribute("key"));
    if (currentKey == key)
        return;
    H2.innerHTML = TAB_CONTENT[key].heading;
    P.innerHTML = TAB_CONTENT[key].content;
    document.querySelector("." + ACTIVE_TAB_CLASS).classList.remove(ACTIVE_TAB_CLASS);
    el.classList.add(ACTIVE_TAB_CLASS);
    let src = TAB_IMG.src;
    src=src.replace(/\d\.svg/, `${key + 1}.svg`);
    TAB_IMG.src = src;
    currentKey = key;
};
tabs.forEach((t) => {
    t.addEventListener("click", tabHandler);
});
