
function seasonOpen() {
  closeAll();
  document.getElementById("season").style.display = "block";
}
function springOpen() {
  closeAll();
  document.getElementById("spring").style.display = "block";
}
function summerOpen() {
  closeAll();
  document.getElementById("summer").style.display = "block";
}
function autumnOpen() {
  closeAll();
  document.getElementById("autumn").style.display = "block";
}
function winterOpen() {
  closeAll();
  document.getElementById("winter").style.display = "block";
}
function cevirİng() {
  
  document.getElementById("ing").style.backgroundColor = "blue";
  document.getElementById("ing").style.color = "white";
  document.getElementById("tr").style.backgroundColor = "transparent";
  document.getElementById("tr").style.color = "black";
 
  document.getElementById("seasons-text").innerText='SEASONS';
  document.getElementById("spring-text").innerText='SPRING';
  document.getElementById("summer-text").innerText='SUMMER';
  document.getElementById("autumn-text").innerText='AUTUMN';
  document.getElementById("winter-text").innerText='WINTER';
 
}
function cevirTr() {
  document.getElementById("ing").style.backgroundColor = "transparent";
  document.getElementById("ing").style.color = "black";
  document.getElementById("tr").style.backgroundColor = "blue";
  document.getElementById("tr").style.color = "white";
  
  document.getElementById("seasons-text").innerText='MEVSİMLER';
  document.getElementById("spring-text").innerText='İLK BAHAR';
  document.getElementById("summer-text").innerText='YAZ';
  document.getElementById("autumn-text").innerText='SONBAHAR';
  document.getElementById("winter-text").innerText='KIŞ';
}
function closeAll(){
  document.getElementById("season").style.display = "none";
  document.getElementById("spring").style.display = "none";
  document.getElementById("summer").style.display = "none";
  document.getElementById("autumn").style.display = "none";
  document.getElementById("winter").style.display = "none";
}
