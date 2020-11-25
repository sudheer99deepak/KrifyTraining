//without recursion
let product=function(num)
{
let prod=1;
for(let i=1;i<=num;i++){
    prod=prod*i;
}
return prod
}
console.log(product(5))
//with recursion
let product1=function(num)
{
    if(num<=1)
        return 1;
    else
        return (num*product1(num-1))
}
console.log(product1(6))