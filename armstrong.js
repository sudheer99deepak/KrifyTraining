let armstrong=function(num)
{
    let rem
    let sum=0
    let temp=num
   while(num>0)
   {
       rem=num%10
       sum=sum+rem**3
       num=Math.floor(num/10)
   } 
   if(temp==sum)
   return ("Armstrong")
   else
   return ("Not Armstrong")
}
console.log(armstrong(153))