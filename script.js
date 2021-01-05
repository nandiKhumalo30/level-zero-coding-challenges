function printVariable(){
    var x = 0
    var y = 1
    console.log(x)
    console.log(y)
    x += 3
    y += x
    console.log(x)
    console.log(y)
}
printVariable()

function bODMAS(){
    var x = 1 + 1 * 2
    var y = (1 + 1) * 2
    var z = 1 + (1 * 2)
    var a = 1 + 1 * 2/2
    var b = (1 + 1 * 2) / 2
    console.log(x,y,z,a,b)
}
bODMAS()

function checkForSixtyFive(a,b){
   if(a + b === 65 || a === 65 || b === 65){
       console.log('true')
   } else {
       console.log('false')
   }
}
checkForSixtyFive(65,65)

function checkForThree(a,b){
   if(a + b === 3 && (a === 3 || b === 3)){
       console.log('true')
   } else {
       console.log('false')
   } 
}
checkForThree(3,3)

function triangleArea(a,b,c){
var s = (a + b + c)/2
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log(area)
}
triangleArea(5,4,3)

function maxNum(a,b,c){
    if(a > b && a > c){
        console.log(a)
    } else if(b > a && b > c){
        console.log(b)
    } else {
        console.log(c)
    }
}
maxNum(11,22,3)

function tempInFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5) + 32
    console.log(fahrenheit)
}
tempInFahrenheit(10)

function tempInCelcius(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9
    console.log(celcius)
}
tempInCelcius(100)

function time(num){
    var minutes = num % 60
    var hours = (num - minutes) /60
    console.log(hours + ' hours,', minutes + ' minutes')
}
time(133)

function multiplesOf3and5(){
    var sum = 0   
    for(let i = 0; i < 1000; i++){
        if(i % 3 === 0|| i % 5 === 0){
           sum += i 
        }
    }
    console.log(sum)
}
multiplesOf3and5()

function vowels(str){
    console.log(str.match(/[a,e,i,o,u]/ig))
}
vowels('hello Aurora')

function matchLetters(str, str2){
    var re = new RegExp(`[${str2}]`, "g")
    console.log(str.match(re))
}
matchLetters('house', 'computers')





