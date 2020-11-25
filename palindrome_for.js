let str = "MaLayAlam";
let strn1 = str.toUpperCase();
let temp=strn1
var strn="";
for(i=str.length-1;i>=0;i--)
{
    string=str.charAt(i)
    strn=strn+string
}
if(temp==strn){
    console.log("Palindrome")
}
else
console.log("Not Palindrome")