import {Domselectors} from './dom';
import {Countries} from './countries';
import "../css/style.css";

//to get random country

let random = Math.floor(Math.random() * Countries.length);
let rc = (Countries[random])
//Initial card
function insert(country){
         document.getElementById("flex-container").insertAdjacentHTML("afterbegin",
     `<div class="card">
     <h1 class="card-title">${country.Name}</h1>
     <img src="${country.Image}" alt="" class="card-image">
     </div>`)
    }
    

 insert(rc)
 

 //search bar
 Domselectors.Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const submission= `${Domselectors.SearchBar.value}`;
    
    if (submission != rc.Continent ){
        Domselectors.Answer.textContent= "Wrong Answer :(";

    }
    else {
        Domselectors.FlexContainer.innerHTML="";
        Domselectors.Answer.textContent="";
        random = Math.floor(Math.random() * Countries.length);
        rc = (Countries[random])
        insert(rc)
    }
    function AnswerKey(country) {
        console.log(`Country: ${country.Name}, Continent: ${country.Continent}`);
    }
    
    
    Countries.forEach(country => AnswerKey(country));
    console.log("ANSWER KEY")
})



   

