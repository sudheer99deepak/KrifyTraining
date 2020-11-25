let firstNum=0;
let secondNum=1;
let thirdNum;
for(i=1;i<=20;i++){
    console.log(firstNum);
    thirdNum=firstNum+secondNum;
    firstNum=secondNum;
    secondNum=thirdNum;
}