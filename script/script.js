'use strict';
const formEl = document.getElementById('form-item');
const itemEl = document.getElementById('item');
const itemContainerEl = document.getElementById('items-container');


const items= [];


formEl.addEventListener('submit',(e)=>{
 e.preventDefault(); 
 if(itemEl.value){
  const item =itemEl.value;
  alert(item);
 }else{
  alert ('enter a value');
 }
});
  
