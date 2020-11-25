let primeNum=function(num){
    let count=0,sum=1
    for(i=1;i<=num;i++)
    {   
        count=0
        for(j=1;j<i;j++)
        {
            if(i%j==0)
            count++
        }
        if(count<2)
        continue
        else
        sum=sum+i
    }
    console.log(sum)
}
primeNum(100)