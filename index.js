let btn = document.querySelector('.new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
console.log(btn, quote, person)

const quotes = [
    {quote: `"power is not will, it is the phenomenon of physically making things happen"`, person: `Uchiha Madara`},
    {quote: `"you shall know pain"`, person: `Uzumaki Nagato`},
    {quote: `"Hard work is worthless for those that don't believe in themselves"`, person: `Uzumaki Naruto`},
    {quote: `"if you don't like the hand that fate's dealt you with, fight for a new one."`, person: `Uzumaki Naruto`},
    {quote: `"The moment people come to know love, they run the risk of carrying hate"`, person: `Uchiha Obito`},
    {quote: `"Somebody told me i am a failure, i'll prove them wrong"`, person: `Uzumaki Naruto`},
    {quote: `"A smile is the easiest way out of a difficult situation"`, person: `Sakura Harano`},
    {quote: `"Failing doesn't give you a reason to give up, as long as you believe"`, person: `Uzumaki Naruto`},
    {quote: `"Growth occurs when one goes beyond one's limits. realizing that is also part of training"`, person: `Uchiha Itachi`},
    {quote: `"If you don't share someone's pain, you can never understand them"`, person: `Uchiha Madara`}
]

btn.addEventListener("click", function(){
     
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})