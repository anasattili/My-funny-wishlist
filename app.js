'use strict'

function Wish(wishName,date) {
    this.wishName = wishName;
    this.date = date;
    Wish.all.push(this);
};
 Wish.all =[];


var formList = document.querySelector('#wishList');
formList.addEventListener('submit',function(event) {

event.preventDefault();
var inpute1 = event.target.wishName.value;
var inpute2 = event.target.date.value;
var submitButton = event.target.id;

var myWishes = new Wish(wishName, date);
wishRender();

});
var container = document.querySelector('#wishTable');
var tr1 =document.createElement('tr');
container.appendChild(tr1);

function wishRender() {
    setWishes()
  var td1 =document.createElement('td');  
  container.appendChild(td1);
  td1.textContent = "Wish title  " + " Expected date  " + " Your wish come ture";
   var tr2 =document.createElement('tr');
   container.appendChild(tr2);
   for(var i=0 ; i<Wish.all.length ; i++){
       var td2 = document.createElement('td');
       tr2.appendChild(td2);
       td2.textContent = Wish.all[i].wishName + Wish.all[i].date;
      }

}
wishRender();

function setWishes()
{
    var product = JSON.stringify(Wish.all);
    localStorage.setItem("data", product);
}
function getWishes() {
    var product= localStorage.getItem("data");
    if(product) {
        Wish.all = JSON.parse(product);
        wishRender();
    }
}






















function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  getWishes()