            //    CHP 31-35 (FUNCTION)

// TASK 1
// var date = new Date();
// document.write(date);



// TASK 2
// function greeting(){
//     var inp1 = prompt("Enter Your First Name");
//     var inp2 = prompt("Enter Your Last Name");
//     var firstChar = inp1.slice(0,1);
//     var   first = firstChar.toUpperCase();
//     var firstCharOthers = inp1.slice(1);
//     var  firstOthers = firstCharOthers.toLowerCase();
//      var mixOne =  first + firstOthers; 

//      var secondChar = inp2.slice(0,1);
//      var   second = secondChar.toUpperCase();
//      var secondCharOthers = inp2.slice(1);
//      var  secondOthers = secondCharOthers.toLowerCase();
//       var mixTwo =  second + secondOthers;



//     var mixed = mixOne + " " + mixTwo;

//     return document.write("Hello....!" + " " + mixed);
// }

// greeting();



// TASK 3
// function add() { 
//     var inp1 = +prompt("Enter First Value");
//     var inp2 = +prompt("Enter Second Value");
//     var result = inp1 + inp2;
//     return document.write("The sum of two numbers is : " + result);
// }

// add();


// // TASK 4
// var num1 = +prompt("Enter First Number");
// var sign = prompt("Enter Opertaor");
// var num2 = +prompt("Enter Second Number");


// function calculate(num1,sign,num2) {

//     var a = num1;
//     var b = num2;
//     var oper = sign;

//     switch (oper) {
//         case "+":
//             var c = a+b;
//             return c
//             break;
//         case "-":
//             var c = a-b;
//             return c
//             break;
//         case "*":
//             var c = a*b;
//             return c
//             break;
//         case "/":
//             var c = a/b;
//             return c
//             break;
//         case "%":
//             var c = a%b;
//             return c
//             break;
    
//         default:
//             break;
//     }
    
// }

// document.write("Result of "+num1+" "+sign+" " +num2+" is "+calculate(num1,sign,num2));



// TASK 5
// var num = +prompt("Enter A Number");
// function Square(num) {

//     var num = num;
//     return  Math.pow(num,2)
    
// }

// document.write("Square of "+num+" is "+Square(num));


// TASK 6
// var num = +prompt("Enter A Number");


// function calculate(num) {

//     var a = num;
//     var fac = num;
//     if(num === 0){
//         fac = 1;
//     }
//     else{
//         for (let index = num-1; index > 0; index--) {
//             fac = fac * index;   
//         }
//     }
//     return fac;
    
// }

// document.write("Factorial of "+num+"! is : "+calculate(num));



// TASK 7
// var start = +prompt("Enter A Number To Start A Count");
// var end = +prompt("Enter A Number To End A Count");


// function countPrint(start, end) {
//     var a = start;
//     var b = end;

//     for (var index = a; index <= b; index++) {
//         document.write(index + " ");   
//     }
    
// }

// countPrint(start,end);


// TASK 8
// var base = +prompt("Enter A Base Value of Triangle");
// var perpendicular = +prompt("Enter A Perpendicular Value of Triangle");


// function calculateHypotenuse(base, perpendicular) {
//     var b = base;
//     var p = perpendicular;
//     var h = "";
//     function calculateSquare(b,p,h){
//             var b= b;
//             var p = p;
//             var h =h;

//             return ((Math.sqrt(Math.pow(b,2)+Math.pow(p,2))).toFixed(2))
//     }
//     return (calculateSquare(b,p,h))
// }


// document.write("Hypotinuse &#8776; "+calculateHypotenuse(base,perpendicular));



// TASK 9
// var w = +prompt("Enter Width of Rectangle");
// var h = +prompt("Enter Height of Rectangle");


// function area(w, h) {
//     var w = w;
//     var h = h;
//     return (w*h)
// }


// document.write("1. Arrgument As Variable  <br> Area of Rectangle is "+area(w,h));

// document.write("<br><br>2. Arrgument As Value  <br> Area of Rectangle is "+area(w.valueOf(),h.valueOf()));


// TASK 10
// var string = prompt("Enter a String to check its plaindrome or not");
// function check(str) {
//     var str  = str;
//     var strrev ="";
    
//     for (let index = str.length-1; index >= 0; index--) {
//         strrev += str[index];        
//     }
//     if (str == strrev) {
//         document.write("Its Plaindrome");
//     } else {
//         document.write("Its not Plaindrome");

//     }
    
// }

// check(string);


// TASK 11
// var str = prompt("Enter a Sentece");

// function caseConvert(string) {
//     var str = string;
//     var splitedStr  = str.split(" ");

//     var strUpr =[];
//     for (let index = 0; index < splitedStr.length; index++) {
//         var first = splitedStr[index].slice(0,1);
//         var last = splitedStr[index].slice(1);
//         first = first.toUpperCase()
//         var word = first+last + " ";
//         strUpr += word;     
//     }
//     strUpr = strUpr.toString()
//     return strUpr;
       
// }
// document.write("Input String : "+str);
// document.write("<br>Output String : "+caseConvert(str));



// TASK 12
// var str = prompt("Enter a Sentece");

// function findlong(string) {
//     var str = string;
//     var splitedStr  = str.split(" ");
//     var bigCount = 0;
//     var num = 0;
//     for (let index = 0; index < splitedStr.length; index++) {
//         var length = splitedStr[index].length;
//         if (length>bigCount) {
//             bigCount = length;
//             num = index;
//             length = 0;
//         }     
//     }
//     return (splitedStr[num] + " <br> Length is " + bigCount);
       
// }
// document.write("Input String : "+str);
// document.write("<br>Longest Word : "+findlong(str));



// TASK 13
// var str = prompt("Enter a String");
// var ltr = prompt("Enter a letter");


// function findltr(string,letter) {
//     var str = string;
//     var ltr = letter;
//     var count  = 0;
//     for (let index = 0; index < str.length; index++) {
//         if (ltr=== str[index]) {
//             count += 1;
//         }     
//     }
//    return count    
// }
// document.write("Input String : "+str);
// document.write("<br>Number of "+ltr+"'s : "+findltr(str,ltr));



// TASK 14
// var r = prompt("Enter the Radius Circle");


// function calcCircumference(radius) {
//     var r = radius;
    
//    return (2* (Math.PI * r)).toFixed(2);    
// }

// function calcArea(radius) {
//     var r = radius;
//    return (Math.PI * (Math.pow(r,2))).toFixed(2);    
// }

// document.write("<br>Area of circle is : "+calcArea(r));
// document.write("<br>Circumference of circle is : "+calcCircumference(r));