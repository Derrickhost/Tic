var input=document.getElementsByName("srh");
function search(){
    if (input==="Object") {
        document.getElementById("sinput")
    .innerHTML="Search";
    }
    else{ 
    document.getElementById("sinput")
    .innerHTML="close";
    }
}
function openbtn() {
  document.getElementById("container").
  style.visibility = "visible";
}

function closebtn() {
  document.getElementById("container").
  style.visibility= "hidden";
}
    setInterval(ads,9000);
    function ads() {
        document.getElementById("ads")
        .style.visibility="visible";
    }
  var adsclosebtn=()=>{
    document.getElementById("ads")
    .style.visibility="hidden";
  }


setInterval(time,1000);
function time() {
    const d= new Date();
    document.getElementById("Date")
    .innerHTML=d.toLocaleTimeString();
}

function openchat() {
 var x=document.getElementById("text");
 if (x.style.display==="none") {
  x.style.display="block";
 }

 else{
  x.style.display="none";
 }
// style.display="block";
}



function openbitcion() {
 var p=document.getElementById("add");
if (p.style.display==="none") {
  p.style.display="block"; 
}

else{
  p.style.display="none";
}
}
function openbank() {
  var p=document.getElementById("bankadd");
 if (p.style.display==="none") {
   p.style.display="block"; 
 }
 
 else{
   p.style.display="none";
 }
 }
 function openpaypal() {
  var p=document.getElementById("payadd");
 if (p.style.display==="none") {
   p.style.display="block"; 
 }
 
 else{
   p.style.display="none";
 }
 }
 function openzelle() {
  var p=document.getElementById("zelleadd");
 if (p.style.display==="none") {
   p.style.display="block"; 
 }
 
 else{
   p.style.display="none";
 }
 }
function opencashapp() {
  document.getElementById("Cashadd").
  style.display="block";
  return true;
}