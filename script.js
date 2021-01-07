function taskOne(){
    var x = 0
    var y = 1
    console.log(x)
    console.log(y)
    x += 3
    y += x
    console.log(x)
    console.log(y)
}
taskOne()

function taskTwo(){
    var x = 1 + 1 * 2
    var y = (1 + 1) * 2
    var z = 1 + (1 * 2)
    var a = 1 + 1 * 2/2
    var b = (1 + 1 * 2) / 2
    console.log(x,y,z,a,b)
}
taskTwo()

function taskThree(a,b){
   if(a + b === 65 || a === 65 || b === 65){
       return true
   } else {
       return false
   }
}
taskThree(65,65)

function taskFour(a,b){
    let sum = a + b
    let sumSearch = sum.toString().includes('3')
    if(sumSearch === true && (a === 3 || b === 3)){
        return true
    } else {
        return true
    } 
}
taskFour(33,3)

function taskFive(a,b,c){
var semiperimeter = (a + b + c)/2
var area = Math.sqrt(semiperimeter*(semiperimeter-a)*(semiperimeter-b)*(semiperimeter-c))
return area
}
taskFive(5,4,3)

function taskSix(a,b,c){
    if(a > b && a > c){
        return a
    } else if(b > a && b > c){
        return b
    } else {
        return c
    }
}
taskSix(111,22,33)

function taskSevenTempInFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5) + 32
    return fahrenheit
}
taskSevenTempInFahrenheit(10)

function taskSevenTempInCelcius(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9
    return celcius
}
taskSevenTempInCelcius(100)

function taskEight(num){
    var minutes = num % 60
    var hours = (num - minutes) /60
    if(hours === 1 && minutes === 1){
        console.log(hours + ' hour,', minutes + ' minute') 
    } else if(hours === 1 && minutes !== 1){
        console.log(hours + ' hour,', minutes + ' minutes') 
    } else if(hours !== 1 && minutes === 1){
        console.log(hours + ' hours,', minutes + ' minute') 
    } else {
        console.log(hours + ' hours,', minutes + ' minutes')
    }
    
}
taskEight(121)

function taskNine(){
    var sum = 0   
    for(let i = 0; i < 1000; i++){
        if(i % 3 === 0|| i % 5 === 0){
           sum += i 
        }
    }
    console.log(sum)
}
taskNine()

function taskTen(str){
    console.log(str.match(/[a,e,i,o,u]/ig).join(','))
}
taskTen('hello Aurora')

function taskEleven(str, str2){
    var re = new RegExp(`[${str}]`, "g")
    console.log(str2.match(re).join(','))
}
taskEleven('house', 'computers')
