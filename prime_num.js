let num=15;
let count=0;
let i;
for(i=2;i<num;i++)
{
    if(num%i==0)
    {
        count++;
        break;
    } 
    
}
if(count>0)
    console.log("Not a prime number");
else
    console.log("Prime Number");