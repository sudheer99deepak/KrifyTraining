let myBook=
{
    title:'soulmtes',
    author:'vinit k bansal',
    pulishedYear:'2012'
}

let firstBook=
{
    title:'a broken man',
    author:'vikranth kanna',
    pulishedYear:'2015'
}

let secondBook=
{
    title:'usha',
    author:'deepak',
    pulishedYear:'2019'
}

let getBook=function(book)
{
    return (`${book.title} by ${book.author} in ${book.pulishedYear}`)
}
console.log(getBook(myBook))
console.log(getBook(firstBook))
console.log(getBook(secondBook))