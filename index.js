function writeCards(stringNames, eventName) {
    let cardsRay = []
     for (let a = 0; a < stringNames.length; a++) 
     cardsRay.push(`Thank you, ${stringNames[a]}, for the wonderful ${eventName} gift!`)
     return cardsRay
 } 

 function countDown(number) {
    while (number > 0)
    {console.log(number)
    number--}
    console.log(number)
}
countDown(11)