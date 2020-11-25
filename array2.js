let msg=['hai','welcome','how are you?','where are you?','come home']
// console.log(msg.length)
// console.log(msg[2])
// console.log(msg[msg.length-1])
// console.log(msg.pop())
// msg.push("nice")
// console.log(msg)
// msg.shift()
// console.log(msg)
// msg.unshift("bye")
// console.log(msg)
// msg.splice(1,1,"tata")
// console.log(msg)
// msg.splice(1,0,"jump")
// console.log(msg)
// msg.slice(1,msg.length-2)
// console.log(msg)

msg.forEach(function(index,item)
{
    console.log(index,item)
})

let fun=function(item,index)
{
    console.log(item,index)
}
msg.forEach(fun)