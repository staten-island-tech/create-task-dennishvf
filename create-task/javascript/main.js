import { Domselectors } from "./dom";
import {Countries} from './countries';
import "../css/style.css";

//Initial card
function iinsert(arr){
    arr.random((Country) => {
         document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
     `<div class="card">
     <h1 class="card-title">${Country.Name}</h1>
     <img src="${Country.Image}" alt="" class="card-img">
     </div>`)
     });
     
 }
 iinsert(menu)