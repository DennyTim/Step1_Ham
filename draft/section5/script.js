let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let all = document.getElementById('all')

all.onclick = function() {
 let redClass = Array.prototype.slice.call(document.getElementsByClassName('red'))
 .map(function(value){
  value.style.display = "inline-block";
 });
 let greenClass = Array.prototype.slice.call(document.getElementsByClassName('green'))
 .map(function(value){
  value.style.display = "inline-block";
 });
 let blueClass = Array.prototype.slice.call(document.getElementsByClassName('blue'))
 .map(function(value){
  value.style.display = "inline-block";
 });
};


red.onclick = function() {
 let redClass = Array.prototype.slice.call(document.getElementsByClassName('red'))
 .map(function(value){
  value.style.display = "inline-block";
 });
 let greenClass = Array.prototype.slice.call(document.getElementsByClassName('green'))
 .map(function(value){
  value.style.display = "none";
 });
 let blueClass = Array.prototype.slice.call(document.getElementsByClassName('blue'))
 .map(function(value){
  value.style.display = "none";
 });
};

green.onclick = function() {
 let redClass = Array.prototype.slice.call(document.getElementsByClassName('red'))
 .map(function(value){
  value.style.display = "none";
 });
 let greenClass = Array.prototype.slice.call(document.getElementsByClassName('green'))
 .map(function(value){
  value.style.display = "inline-block";
 });
 let blueClass = Array.prototype.slice.call(document.getElementsByClassName('blue'))
 .map(function(value){
  value.style.display = "none";
 });
};

blue.onclick = function() {
 let redClass = Array.prototype.slice.call(document.getElementsByClassName('red'))
 .map(function(value){
  value.style.display = "none";
 });
 let greenClass = Array.prototype.slice.call(document.getElementsByClassName('green'))
 .map(function(value){
  value.style.display = "none";
 });
 let blueClass = Array.prototype.slice.call(document.getElementsByClassName('blue'))
 .map(function(value){
  value.style.display = "inline-block";
 });
};
