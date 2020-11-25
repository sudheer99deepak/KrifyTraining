
let  strRev = function(str)
{
    let temp=str
    let splitStr = str.split("")
    let rev = splitStr.reverse()
    let join = rev.join("")
    if(temp===join)
    return ("palindrome")
    else
    return ("Not palindrome")
}
console.log(strRev("MALAYALAM"))
