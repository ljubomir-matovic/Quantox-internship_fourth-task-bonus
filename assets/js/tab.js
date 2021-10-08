var tab = { TAB_CONTAINER: document.querySelector(".tab-target") };
tab = {
    ...tab,
    tabs : document.querySelectorAll(".tab"),
    currentKey : 0,
    H2 : tab.TAB_CONTAINER.querySelector("h2"),
    P : tab.TAB_CONTAINER.querySelector("p"),
    TAB_IMG : tab.TAB_CONTAINER.querySelector("img"),
    ACTIVE_TAB_CLASS : "active-tab",
    TAB_CONTENT : [{ heading: "Bookmark in one click", content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites." },
    { heading: "Intelligent search", content: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks." },
    { heading: "Share your bookmarks", content: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button." }],
    tabHandler :(e) => {
        let el = e.target;
        if (el.tagName === "SPAN")
            el = el.parentElement;
        let key = Number(el.getAttribute("key"));
        if (tab.currentKey == key)
            return;
        tab.H2.innerHTML = tab.TAB_CONTENT[key].heading;
        tab.P.innerHTML = tab.TAB_CONTENT[key].content;
        document.querySelector("." + tab.ACTIVE_TAB_CLASS).classList.remove(tab.ACTIVE_TAB_CLASS);
        el.classList.add(tab.ACTIVE_TAB_CLASS);
        let src = tab.TAB_IMG.src;
        src = src.replace(/\d\.svg/, `${key + 1}.svg`);
        tab.TAB_IMG.src = src;
        tab.currentKey = key;
    }
};
tab.tabs.forEach((t) => {
    t.addEventListener("click", tab.tabHandler);
});
