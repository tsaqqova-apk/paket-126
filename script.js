var storedItem2 = localStorage.getItem("simpanan2");
function awalmula(){
muatsengkesimpen2();
tinggiatasotomatis();
}
function nyimpen2(){
var Item = document.getElementById("sumber2").value;
localStorage.setItem("simpanan2", Item);
document.getElementById("tempattampil2").innerHTML = Item;
}
function muatsengkesimpen2(){
localStorage.getItem("simpanan2");
document.getElementById("tempattampil2").innerHTML = storedItem2;
}
function ngapus2() {
localStorage.removeItem('simpanan2');
var setelahngapus2 = document.getElementById("tempattampil2");
	setelahngapus2.innerHTML  = null;
}
function tinggiatasotomatis() {
var elemenyangkitatiru = document.getElementById("headerid");
var elemenyangdituju = document.getElementsByClassName("kontenaplikasi");
for (var i = 0; i < elemenyangdituju.length; i++) {
var tinggielemenyangditiru = elemenyangkitatiru.offsetHeight;
elemenyangdituju[i].style.marginTop = tinggielemenyangditiru + "px";
}
}
setInterval(tinggiatasotomatis, 1000);