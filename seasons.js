function reset(){
  document.getElementById("season").style.display = "none";
  document.getElementById("spring").style.display = "none";
  document.getElementById("summer").style.display = "none";
  document.getElementById("autumn").style.display = "none";
  document.getElementById("winter").style.display = "none";
}

function seasonOpen() {
  reset()
  document.getElementById("season").style.display = "block";
}
function springOpen() {
  reset()
  document.getElementById("spring").style.display = "block";
}
function summerOpen() {
  reset()
  document.getElementById("summer").style.display = "block";
}
function autumnOpen() {
  reset()
  document.getElementById("autumn").style.display = "block";
}
function winterOpen() {
  reset()
  document.getElementById("winter").style.display = "block";
}
function cevirİng() {
  document.getElementById("ing").style.backgroundColor = "blue";
  document.getElementById("ing").style.color = "white";
  document.getElementById("tr").style.backgroundColor = "transparent";
  document.getElementById("tr").style.color = "black";
  document.getElementById("lang-ing").style.display = "block";
  document.getElementById("lang-ing1").style.display = "block";
  document.getElementById("lang-ing2").style.display = "block";
  document.getElementById("lang-ing3").style.display = "block";
  document.getElementById("lang-ing4").style.display = "block";
  document.getElementById("lang-tr").style.display = "none";
  document.getElementById("lang-tr1").style.display = "none";
  document.getElementById("lang-tr2").style.display = "none";
  document.getElementById("lang-tr3").style.display = "none";
  document.getElementById("lang-tr4").style.display = "none";
}
function cevirTr() {
  document.getElementById("ing").style.backgroundColor = "transparent";
  document.getElementById("ing").style.color = "black";
  document.getElementById("tr").style.backgroundColor = "blue";
  document.getElementById("tr").style.color = "white";
  document.getElementById("lang-ing").style.display = "none";
  document.getElementById("lang-ing1").style.display = "none";
  document.getElementById("lang-ing2").style.display = "none";
  document.getElementById("lang-ing3").style.display = "none";
  document.getElementById("lang-ing4").style.display = "none";
  document.getElementById("lang-tr").style.display = "block";
  document.getElementById("lang-tr1").style.display = "block";
  document.getElementById("lang-tr2").style.display = "block";
  document.getElementById("lang-tr3").style.display = "block";
  document.getElementById("lang-tr4").style.display = "block";
}
