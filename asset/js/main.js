
//GETTING THE DOM:
const lib =document.getElementById("lib");

//GETTIG DATA
//  MAIN LIBRARY:

function render(list){
    const template = list.map(book => {
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
render(BOOKS);


//FILTER BY ME:
const filters=document.getElementById("menif")

//GET FILTERS ID:
function calcFilters(){
    
}







//GETTING DOMS:
const filterMenu=document.getElementById("authorss");

//SHOWING FILTER ITEMS FUNCTION:

function makeFilterList(){
    const authorsName=[]

    for (book of BOOKS){
        
        if(!authorsName.includes(book.author)){
            authorsName.push(book.author)
        }
    }
    
    const temp = authorsName.map(aut  => {
    return`
    <div class="item">
    <input type="checkbox" id="${aut} class="check" />
    <label for="${aut}" class="check">${aut}</label>
</div>
    `
}).join("");
filterMenu.innerHTML+=temp; 
}
makeFilterList()





//GETTING DOM NODE
const lang=document.getElementById("lan")
//GETTING LANGUEGES:

function getLan(){
const zaban= []
for(const lang of BOOKS) {
    if(!zaban.includes(lang.language)){
       zaban.push(lang.language);
}
}
const tep=zaban.map(zabun => {
     return`
    <div class="item">
    <input type="checkbox" id="${zabun} class="check" />
    <label for="${zabun}" class="check">${zabun}</label>
</div>
    `
}).join("");
lang.innerHTML+=tep
}
getLan();




//GETTING DOM:
const gen=document.getElementById("gen");

//FUNCTION FOR GENRE:
function genreGet(){
    const genr=[];

    for(book of BOOKS){
        if(!genr.includes(book.genre)){
            genr.push(book.genre);
        }
    }
    const t=genr.map(ger=>{
    return`
    <div class="item">
    <input type="checkbox" id="${ger} class="check" />
    <label for="${ger}" class="check">${ger}</label>
</div>
    `
    }).join("")
gen.innerHTML+=t
}
genreGet()
