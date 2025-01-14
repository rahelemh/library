
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
    <input type="checkbox" id="${aut}" value="${aut}" onchange="addAuothorFilter(event)"  class="check" />
    <label for="${aut}" class="check" >${aut}</label>
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

    <input type="checkbox" id="${zabun}" class="check" value="${zabun}"  onchange="zabanFilterAdd(event)" />
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
    <input type="checkbox" id="${ger}" class="check" value="${ger}" onchange="filterAddGenre(event)" />
    <label for="${ger}" class="check">${ger}</label>
</div>
    `
    }).join("")
gen.innerHTML+=t
}
genreGet()

//-----------------------------------------------------------------------------------------

//FILTER PARTS----------------------------------------------------------------------------

//FILTER CONTAINERS:
const selectedAthors=[];
const selectedGenres=[];
const selectedLanguages=[];



//ADDING TO AUTHORS CONTAUNER:
 function addAuothorFilter(evt){
    
    if(evt.target.checked){
        selectedAthors.push(evt.target.value);
 console.log(selectedAthors)

    }
    else{
        const hazfAuthor=selectedAthors.findIndex(item =>item === evt.target.value);
        selectedAthors.splice(hazfAuthor,1);
 console.log(selectedAthors)



    }

 }


 //ADDING FILTER TO LANGUAGES:

 function zabanFilterAdd(evt){
    if(evt.target.checked){
        selectedLanguages.push(evt.target.value);
        console.log(selectedLanguages)
    }
    else{
        const hazfZaban=selectedLanguages.indexOf(evt.target.value);
        selectedLanguages.splice(hazfZaban,1);
        console.log(selectedLanguages)
    }

 }

//ADDDING FILTER TO GENRES:
function filterAddGenre(evt){
    if(evt.target.checked){
        selectedGenres.push(evt.target.value)
        console.log(selectedGenres)

    }
    else{
        const hazfGenre=selectedGenres.indexOf(evt.target.value);
        selectedGenres.splice(hazfGenre,1)
        console.log(selectedGenres)
    }

}