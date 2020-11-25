let fib=function(num)
{
    let num1=0;
    let num2=1;
    let num3;
    let res;
    for(let i=1;i<=num;i++)
    {
       
        res = num1
        num3=num1+num2;
        num1=num2;
        num2=num3;
       
    }
    return res;
    
}
console.log(fib(5))