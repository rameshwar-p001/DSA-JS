// Day 1

// simpel basic 
// let a = 10
// let b=20

// // console.log(a+b)
// // console.log("The addition is A and B is = " + a+b)                 //here we want to apply the BODMAS rule it say that first write a string than it will do concatinaion in string 
// // console.log("The addition is A and B is = " + (a+b))               // here also we apply the BODMAS rule but use prentesis and we get correct ans 
// // console.log(a+b +" = it is the addition of a and b")               // in this first addition will done after that it will concatination 



// type corsion 
// console.log("1"+1)                  // "+" this symbol has 2 work 1] concatination , 2] addition ,  :. but in this case we have that 1 string and 1 number then it will do concatination not additon 
// console.log("1"*1)                  // "*" it menas that it have only one work that is multiply
// console.log("1"-1)                  // "-" it has also 1 work substraction
// console.log("1"/1)                  // "/" it was do only division


// // User input and Type casting {String into number }           //:. For taking a user input we use the prompt
// let a = Number(prompt("Enter A value  = "))                   //:. Here we use Number() function for the conver the string into number 
// let b = Number(prompt("Enter B value = "))
// console.log("the ans is = "+ (a+b) )                           


////Day 2 

// Swaping 
// // Using empty contener (Extra contener)
// let a=10
// let b=20
// let c;
// c = a                   // 'a' give its value to 'c'
// a = b                   // 'b' give its value to 'a'
// b = c                    // 'c' give its value to 'b'
// console.log(a, b);


// // not using extra container 
// let a=30
// let b=50
// a = a+b   // a=80
// b = a-b   // 80-50 = b = 30 
// a = a-b   // 80-30 = a = 50 
// console.log(a,b)

// // Using Destructuring (डिस्ट्रक्चरिंग) method  it comes under Array method 

// let a = 30 
// let b = 40
//
// [a,b] = [b,a]                  // explaintion a give a value to b and b give its value to a   [a=30,b=40]=[b=30,a=40]
//
// console.log(a,b)

// opretors
// //1] Arithmatic opretors 

// console.log(1+2)        //Adition
// console.log(2-1)        // Substarction
// console.log(2/4)        // divide (with point value )    // left side is divident and right side ir diviser 
// console.log(Math.floor(2/4))        //divide with no point value 
// console.log(2*4)        //Multipliction
// console.log(4%8)        //Modulo 

// // 2] Relational 
// console.log(10>20)      // Greterthan
// console.log(10<20)      //Lessthan
// console.log(10>=20)     // Greterthan equal
// console.log(10<=20)     //Lessthan equalto 
// console.log(10==10)     // it is equalto but here has 1 problem that 10 == "10" will be true but it was not equal 
// console.log(10===10)    // It is also equal to but here was solution of dubble equal '=='
// console.log(10!==20)    // not equalto 


// // 3] Logical opretor 
// console.log(12>10 && 10<12)     // logical AND T+T=T,T+F=F,F+T=F,F+F=F
// console.log(12<10 || 10>12)     // Logical OR  T+T=T,T+F=T,F+T=T,F+F=F


// //Unary operator 

// //1] increment pre,post
// //a] Post increment
// let a=10
// console.log(a++)     // it will be as it is only 
// console.log(a++)     // it will change 

// //b] Pre increment 
// let b=20
// console.log(++b)     // it will be directly change 
// console.log(++b)

// //2] Decrement pre,post 

// // a]pre decrement 
// let a = 10
// console.log(--a)
// console.log(--a)


// //b] post decrement
// let b=20
// console.log(b--)
// console.log(b--)


// // problem statement 

//// 1]
// let i = 11
// i = i++ + ++i
// console.log(i)

// //2] 
// let a = 11   
// let b = 12
// let c = a + b + a++ + b++ + ++a + ++b
// console. log("a=" + a)
// console. log("b=" + b)
// console. log("c=" + c)

////3] 
// let a = true
// a++
// console.log(a)



// // Day 3
// // math function 
// console.log(Math.abs(-16))        //Math.abs() → positive value
// console.log(Math.round(4.6))    // ans will 5  // Math.round() → nearest integer
// console.log(Math.round(4.4))    // ans will 4 
// console.log(Math.floor(4.9))    // Math.floor() → lower value
// console.log(Math.pow(2, 3))     //Math.pow() -> power of 2^3 
// console.log(Math.sqrt(16))      //Math.sqrt() -> square root of 16 is 
// console.log(Math.trunc(121.543))    //Math.trunc() -> remove the after decimal point 
// console.log(Math.max(12,23,43,21))  //Math.max() -> its give the max value 
// console.log(Math.min(12,23,43,21))  //Math.min() -> its give the min value 
// console.log(Math.random())      //Math.random() -> its give the random value under 0 to 1
// console.log(Math.random()*10)   // *10 was give the random value 0 to 10 

// let a = 120.3221
// console.log(a.toFixed(1));      //toFixed() -> it is use for how many digit we want nummber after decimal 


// Problem Statement 
// // 1] Area and parameter of recangle 

// let l = 20
// let b = 30

// console.log("area of rectange is = "+(l*b))
// console.log("peremeter of rectange is = "+(2*(l*b)))

// // 2] otp genretor 
// console.log(Math.floor((Math.random()*9000)+1000))     // otp genretor 

// // 3] Area of triange using heron's formula 
// let a=2
// let b=4
// let c=5

// // first we want to find "s"
// let s = (a+b+c)/2
// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log("The area of triangel is = "+area)

// // 4] circumference of circal 
// let a = 20
// const pi = 3.17
// // radius 
// c = 2 * pi * a
// console.log("Using Radius = "+c)
// // Diameater
// d = pi * a
// console.log("Using Diameater = "+d)




// // Conditional statement 

//// voting 
// let a = Number(prompt("Enter the age "))
// if(a >= 18 ){
//     console.log("You Can vote..... because your age is "+a)
// }
// else{
//     console.log("You can't do vote.... Because your age is "+a)
// }


// // shope discount 
// let a = Number(prompt("Enter the total amount of shoping...."))

// if(a>0 && a<5000){
//     console.log("You want to pay the amount is = "+a)
// }
// else if(a>=5001 && a<7000){
//     console.log("You want to pay the value is = "+(a-Math.floor((a*5)/100)))
// }
// else if(a>=7001 && a<9000){
//     console.log("You want to pay the value is = "+(a-Math.floor((a*10)/100)))
// }
// else if(a>9001){
//     console.log("You want to pay the value is = "+(a-Math.floor((a*20)/100)))
// }


// // inr denominations

// let a = Number(prompt("Enter the Amount......."))
// if(a>=500){
//     console.log("You want to pay 500 notes = "+(Math.floor(a/500)))
//     a = a % 500
// }
// if(a>=200){
//     console.log("You want to pay 200 notes = "+(Math.floor(a/200)))
//     a = a % 200
// }
// if(a>=100){
//     console.log("You want to pay 100 notes = "+(Math.floor(a/100)))
//     a = a % 100
// }
// if(a>=50){
//     console.log("You want to pay 50 notes = "+(Math.floor(a/50)))
//     a = a % 50
// }
// if(a>=20){
//     console.log("You want to pay 20 notes = "+(Math.floor(a/20)))
//     a = a % 20
// }
// if(a>=10){
//     console.log("You want to pay 10 notes = "+(Math.floor(a/10)))
//     a = a % 10
// }
// if(a>=5){
//     console.log("You want to pay 5 notes = "+(Math.floor(a/5)))
//     a = a % 5
// }
// if(a>=2){
//     console.log("You want to pay 2 notes = "+(Math.floor(a/2)))
//     a = a % 2
// }
// if(a == 1){
//     console.log("You want to pay 1 notes = "+(Math.floor(a/1)))
// }


//// ternary operator 
// //  ? :               after the  ? it will write true statement and , After the : it will write false statment 
// // we have 2 way to declear 
// // 1]
// (123>765 ? console.log("a is greater ") : console.log("B is greater") )

// // 2]
// console.log(123>765 ? "a is greater" : "B is greater")

// // Nested ternary operator 

// let a = Number(prompt("Enter the Value......."))
// console.log(a>0 ? "is positive" : a<0 ? "is nagetive" : "Zero")


// //Switch case 

// let a = Number(prompt("Enter the value "))

// switch(a){
//     case 1 :
//         console.log("monaday ")
//         break
//     case 2 :
//         console.log("tuesday ")
//         break
//     case 3 :
//         console.log("Wendsday ")
//         break
//     case 4 :
//         console.log("Thrusday ")
//         break
//     case 5 :
//         console.log("Friday ")
//         break
//     case 6 :
//         console.log("saturday ")
//         break
//     case 7 :
//         console.log("Sunday  ")
//         break
//     default:
//         console.log("Not define weak day")
// }


// Day 4 
// Looping 

//// 1] For Loop 
// for (let i =1;i<=10;i++){
//     console.log(i)
// }

// for (let i = 2;i<=20;i=i+2){
//     console.log(i)
// }

// for (let i = 20;i>=2;i=i-2){
//     console.log(i)
// }

////For print fail write 
// let i = 20
// for (;i>=2;i=i-2){
//     console.log(i)
// }
// console.log(i+'fail');


////que
//1] addition of natrual number 

////Simple type 
// var a = Number(prompt("Enter the Number you want to do addition .........."))
// var sum = 0
// for(var i=0;i<=a;i++){
//      sum =sum+i
// }
// console.log(sum)

//// Hard type 
// var a = Number(prompt("Enter the Number you want to do addition .........."))
// var sum = 0

// if(isNaN(a)){
//     console.log("Enter valid input....")
// }
// else{
//     if(a>1){
//         for(var i=0;i<=a;i++){
//              sum =sum+i
//         }
//         console.log(sum)
//     }
//     else{
//         console.log("Enter positive ither more than 0 ")
//     }
// }


// ////2] Factorial 

// var a = Number(prompt("Enter the Number you want Factorial  .........."))
// var fac = 1
// for(var i=1;i<=a;i++){
//      fac =fac*i
// }
// console.log(fac)


//// Factor 

// var a = Number(prompt("Enter the Number you want Factor  .........."))
// for(var i=1;i<=a;i++){
//     if(a%i === 0){
//         console.log(i);
//     }    
// }


//// Prime number 

// var a = Number(prompt("Enter a number for prime number "))
// var prime = true
// for(var i=2;i<=Math.floor(a/2);i++){
//     if(a%i === 0){
//         prime = false 
//         break; 
//     }    
// }
// console.log(a+" is the "+prime);


//// Break and continue 

//// Break
// for(let i= 0;i<=23;i++){
//     if(i==10) {
//         break
//     }
//     else{
//         console.log(i );
//     }
// }


// //// Continue 
// for(let i= 0;i<=23;i++){
//     if(i==10) {
//         continue
//     }
//     else{
//         console.log(i );
//     } 
// }


//// while loop 

// var a = prompt("Enter any thing")
// while(a && a.tolowerCase() !=="stop"){
//     a = prompt("Enter any thing (For exit enter the Stop keyword)")
// }


//// addition of given number 

// var a = Number(prompt("Enter a number "))
// let sum = 0
// while(a>0){
//     var r = a%10           // it will take out the last number of digit 
//     sum = sum + r            // 
//     a=Math.floor(a/10)       // it will take out remain digit
// }
// console.log(sum)



//// Reverse of the given number 

// var a = Number(prompt("Enter a number "))
// var sum = 0

// while(a>0){
//     let r =a%10
//     sum=sum*10+r
//     a=Math.floor(a/10)
// }
// console.log(sum)


//// Strong Number 

// var a=Number(prompt("Enter a number to check that number is strong or not "))
// var sum=0
// var n=a
// while(a>0){
//     let r=a%10                // 145 itha 5 kadla 
//     let fact =1
//     for(let i=1;i<=r;i++){
//         fact=fact*i                //5 cha fact kadla 
//     }
//     sum  =sum+fact                  // fact cha sum kela 
//     a=Math.floor(a/10)      // 14 
// }
// if(n===sum){
//     console.log(n+" given number is strong")
// }
// else{
//     console.log(n+" given number is not strong")
// }

////do while 

// let i=1
// do{
//     console.log("Hello ")
//     i++
// }
// while(i<10)


//// Repeate hello 

let a=prompt("Enter any thing ")
let i
do{
    a=prompt("Enter any thing ")
    i++
}
while(a!="Hello")









    