import {Domselectors} from './dom';
import {Countries} from './countries';
import "../css/style.css";
const random = Math.floor(Math.random() * Countries.length);
console.log(random, Countries[random]);
//Initial card
function iinsert(arr){
    arr[random] ((Country) => {
         document.getElementById("flex-container").insertAdjacentHTML("afterbegin",
     `<div class="card">
     <h1 class="card-title">${arr[random].Name}</h1>
     <img src="${Country.Image}" alt="" class="card-image">
     </div>`)
     });
     
 }
 iinsert(Countries)