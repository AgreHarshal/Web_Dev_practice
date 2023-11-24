var random1=Math.floor(6*Math.random())+1;
var name1="images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",name1);
var random2=Math.floor(6*Math.random())+1;
var name2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",name2);

if(random1>random2){
    document.querySelector(".container h1").innerHTML="Player 1 won🚩";
}else if(random2>random1){
    document.querySelector(".container h1").innerHTML="Player 2 won🚩";
}else{
    document.querySelector(".container h1").innerHTML="Its A Tie";
}




