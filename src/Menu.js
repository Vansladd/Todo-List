const menu = (div) => {
    const menuContent = document.createElement("ul");
    const title = document.createElement("h1");
    title.innerText = "Menu"
    for(let i = 0;i<5;i++){
        let menuitem = document.createElement("li");
        menuitem.innerText = "food";
        menuContent.appendChild(menuitem)
    }
    div.appendChild(title);
    div.appendChild(menuContent);

}

export default menu;