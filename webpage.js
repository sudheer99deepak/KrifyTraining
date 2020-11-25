console.log("You came here...")
let nodeEle=document.createElement("li")
let nodeText= document.createTextNode("lassy")

nodeEle.append(nodeText)

document.getElementById("first").append(nodeEle)
function humanize(num){
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
  
    var numString = num.toString();
  
    if (num < 0) throw new Error('Negative numbers are not supported.');
  
    if (num === 0) return 'zero';
  
    //the case of 1 - 20
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    //100 and more
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }
  
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
      return ones[numString[0]] + ' thousand ' + convert(end);
    }
  }

i=1
function myFunction(){
    let newEle =document.createElement("li")
    let newText =document.createTextNode(humanize(i))
    i++
    newEle.append(newText)
    document.getElementById("demo").append(newEle)
}