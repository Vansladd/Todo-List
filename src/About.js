const about = (div)=>{
    const aboutSect = document.createElement("pr");
    const title = document.createElement("h1");
    title.innerText = "About Us"
    aboutSect.innerText = "Welcome to [Your Company Name], where passion meets innovation. Founded in [Year], we have been committed to delivering exceptional [products/services] that enhance the lives of our customers. Our mission is to combine quality, creativity, and customer satisfaction in everything we do."
    div.appendChild(title);
    div.appendChild(aboutSect);
}

export default about