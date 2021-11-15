import './main.scss'

// eslint-disable-next-line no-unused-vars
var cx

let paragraph = document.createElement('p')

// Just like the way we did with &&, we can do with || and ??.
let a = null
let b = a ??= 2_000_000
let c = a ||= b
let d = a &&= c
let sum = b + c + d
let someText = `Expression:
 ${b} + ${c} + ${d} = ${sum}`

let replaceText = 'The quick brown fox jumps over the lazy DOG. If the DOG reacted, was it really lazy?'
let replacedText = replaceText.replaceAll(/dog/ig, 'XXX')

paragraph.innerText = 'Custom text from: dist/bundle.js and styled using SASS'

document.getElementById('sum').innerHTML = someText
document.getElementById('replace').innerHTML = replaceText
document.getElementById('replaced').innerHTML = replacedText
document.body.appendChild(paragraph)

// ESLint test sample
let addFive = 'Add 5'
document.write(addFive)

