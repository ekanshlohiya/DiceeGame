// prompt("hello");
var randomnumber1 = Math.floor(Math.random()*6);
randomnumber1=randomnumber1+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");
var randomnumber2 = Math.floor(Math.random()*6);
randomnumber2=randomnumber2+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2)
{
    document.querySelector(".refresh").textContent="Player1 Wins!!";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector(".refresh").textContent="Player2 Wins!!";
}
else
{
    document.querySelector(".refresh").textContent="!! Draw !!";
}