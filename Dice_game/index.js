var number=Math.floor((Math.random()*6)+1);
var link="images/dice"+number+".png";
var img1=document.querySelector(".img1");
img1.setAttribute("src",link);
var number1=Math.floor((Math.random()*6)+1);
var link1="images/dice"+number1+".png";
var img2=document.querySelector(".img2");
img2.setAttribute("src",link1);
if(number>number1){
  document.querySelector("h1").innerHTML="Player 1 wins";
}else if(number1>number){
  document.querySelector("h1").innerHTML="Player 2 wins";
}else{
  document.querySelector("h1").innerHTML="Refresh Me";
}
