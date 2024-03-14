var gameid=document.getElementById("num");
var gessid=document.getElementById("gess");
var score=document.getElementById("result:");
var score1=document.getElementById("result1");
var matchs=document.getElementById("total");
var topscore=document.getElementById("top");
var randomnumber = Math.floor(Math.random()*10)+1;
var totalscore=0;
var totalscore1=0;
var total=1;
var totalscores=0;
function check()
{
   
       var enterednumber = gameid.value;
       console.log(randomnumber);
       if(randomnumber== enterednumber)
    {
       gessid.textContent="Right";
       alert(" Happy Happy..... Your Currect.....");
       totalscore=totalscore+1;
       score.textContent="Score:"+totalscore;

    }
    else
    {
        totalscore1=totalscore1-1;
        score1.textContent="Score:"+totalscore1;
        gessid.textContent="Wrong";
       
    }
    total=(totalscore)+(-totalscore1);
    matchs.textContent= "TOTAL Match:"+total;
    totalscores=totalscore+totalscore1;
    topscore.textContent="TotalScore:"+totalscores;
}