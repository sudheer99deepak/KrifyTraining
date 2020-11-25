let n=5,pattern="";
for(i=1;i<=n;i++)
{
    for(j=1;j<=i;j++)
    {
        pattern+=j
    }
    console.log(pattern)
    pattern=""
}
console.log(" ")

for(i=n;i>=1;i--)
{
    for(j=1;j<=i;j++)
    {
        pattern+=j
    }
    console.log(pattern)
    pattern=""
}
console.log(" ")

for(i=1;i<=n;i++)
{
    for(k=n-i;k>=1;k--)
    {
        pattern+="*"
    }
    for(j=1;j<=i;j++)
    {
        pattern+=j
    }
    console.log(pattern)
    pattern=""
}
console.log(" ")

for(i=1;i<=n;i++)
{
    for(k=1;k<i;k++)
    {
        pattern+="*"
    }
    for(j=1;j<=n-i+1;j++)
    {
        pattern+=j 
    }
    console.log(pattern)
    pattern=""
}