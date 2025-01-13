
//GETTING THE DOM:
const lib =document.getElementById("lib");

//GETTIG DATA

function render(){
    const template = BOOKS.map(book => {
        return `
        
        <div class="card">
        <div class="up">
            <p>${book.genre}</p>
            <p>${book.published_date}</p>
        </div>

        <img src="./asset/img/${book.imgSrc}" alt="">
        <h3>${book.title}</h3>
        <h2>${book.author}</h2>

    </div>   
        `
        
    }).join("");

    lib.innerHTML+=template
    
}
render();