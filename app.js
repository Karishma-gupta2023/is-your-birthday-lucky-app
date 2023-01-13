var inputDate = document.querySelector("#input-date");
var inputNum = document.querySelector("#input-no");
var outputText = document.querySelector("#output");
var BtnCheck = document.querySelector("#btn-check");

BtnCheck.addEventListener("click",checkLucky);



function checkLucky()
{
var sum=0;
   var dOB = inputDate.value;
   var lucky =inputNum.value;
   dOB=dOB.replaceAll("-","");
   for(var i=0; i<dOB.length;i++){
   sum=sum+Number(dOB.charAt(i));}
   calculateLucky(sum,lucky);
   }

   function calculateLucky(sum1,lucky1)
   {
    console.log(sum1, lucky1);
    if(sum1 % lucky1 == 0)
    outputText.innerText= "Your Birthday is lucky";
    
    else
    outputText.innerText= "Your Birthday is not so lucky";
   }
