var guess=Math.floor(Math.random()*100)+1;
function guessNumber()
{
    var n=document.getElementById("in").value
    if(n==guess)
        document.getElementById("res").innerHTML="Yeah!You Guessed it correctly."
    else if(n>guess)
        document.getElementById("res").innerHTML="Guess smaller number"
    else    
        document.getElementById("res").innerHTML="Guess greater number"
}