// let colors=["red","black","blue","green"]
// // let myFun=function(item,index){
// //     console.log(`Index:${index} and Item:${item}`)
// // }
// // colors.forEach(myFun)

// // colors.push("brown") // adding brown to array
// // console.log(colors)

// // colors["age"]="hi" // stores as object
// // console.log(colors)
// // console.log(colors["age"])
// // console.log(colors.toString()) // gives array in string formate
// // console.log(colors.join(" + ")) // joins elements with + sign
// // console.log(colors.pop()) // removes last element from array
// // console.log(colors.shift()) // removes first element from array
// // colors.unshift("pink") // adds element to array at first index
// // console.log(colors)
// // delete colors[1] 
// // console.log(colors)

// // let names=["deepak","sudheer","krify","company"]
// // let combined = colors.concat(names)
// // console.log(combined)

// // console.log(combined.sort())
// // console.log(combined.reverse())
// // //console.log(combined.findIndex())
// // //console.log(lastIndexOf(colors))
// // console.log(combined.length)

// let flowers=colors.slice()
// flowers[0]="ROSE"
// console.log(colors)
// console.log(flowers)

// colorsE6clone=[...colors]
// colorsE6clone[0]="KrifyEs6"
// console.log(colors)
// console.log(colorsE6clone)

// let x=[25,100,5,26,2,1000000000]
// console.log(x.sort(function(a,b){return a-b})) //sorts in assending order
// console.log(x.sort(function(a,b){return b-a})) // sorts in desending order
// console.log(colors.sort())// sorts in alphabetical assending order
// console.log(colors.sort().reverse())// sorts in reverse alphabetical

let cars=[
    {type:"volvo", year:2016},
    {type:"bmw", year:2018},
    {type:"abc", year:2002}
]
console.log(cars.sort(function(a,b){return a.year-b.year}))

let mySort= function(a,b)
{
    if(a.type>b.type)
    return 1
    else
    return -1
}
console.log(cars.sort(mySort))