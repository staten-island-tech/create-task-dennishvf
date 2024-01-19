import {Domselectors} from './dom';
import {Countries} from './countries';
import "../css/style.css";
const random = Math.floor(Math.random() * Countries.length);
const rc = (Countries[random])
//Initial card
function iinsert(country){
         document.getElementById("flex-container").insertAdjacentHTML("afterbegin",
     `<div class="card">
     <h1 class="card-title">${country.Name}</h1>
     <img src="${country.Image}" alt="" class="card-image">
     </div>`)
     ;
    }
 iinsert(rc)