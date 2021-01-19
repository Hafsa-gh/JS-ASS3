            // CHP 38-42(FUNCTIONS, SWITCH
                // STATEMENTS, WHILE… DOWHILE LOOPS )


// TASK 1
// function power(a,b) {
//     var power = a;
//     for (let index = 0; index < b-1; index++) {
//         power *=a;
//     }
//     return document.write(a+" raise to "+b+" is : " + power);
// }

// power(9,12);       



// TASK 2

// var inputYear = +prompt("Enter an year to find out it's Leap year or not")

// function leapYear(a) {
//     if (a%4 === 0) {
//         if (a%100 === 0) {
//             if (a%400 === 0) {
//                 return document.write("It's leap Year");    

//             } else {
//                 return document.write("It's not a leap Year");

//             }
    
//         } else {
//             return document.write("It's leap Year");    
//         }

//     } else {
//         return document.write("It's not a leap Year");

//     }
// }

// leapYear(inputYear);


// TASK 3
// var a = +prompt("Enter value of a side of triangle");
// var b = +prompt("Enter value of b side of triangle");
// var c = +prompt("Enter value of c side of triangle");

// function calcS(a,b,c){
//     var s= (a+b+c)/2;
//     return s;
// }
// function area(a,b,c){
//     var s= calcS(a,b,c);
//     console.log("s is :" + s);
//     var S = s*(s-a)*(s-b)*(s-c);
//     return (document.write("Area  of triangle is : "+S));
// }
// area(a,b,c);



// TASK 4
// var eng = +prompt("Enter marks of English out of 100");
// var phy = +prompt("Enter marks of Physics out of 100");
// var chem = +prompt("Enter marks of Chemistry out of 100");
// var total = 300;




// function avergCalc(a,b,c){
//     var m1 = a;
//     var m2 = b;
//     var m3 = c;
//     var sum = m1+m2+m3;
//     var averg = sum/3;
//     console.log(averg)

//     var f = averg.toFixed(2);
//     return f;
// }
// function percenCalcu(i,j,k,total){
//     var mi1 = i;
//     var mi2 = j;
//     var mi3 = k;
//     var mt = total;
//     var sum = mi1+mi2+mi3;
//     var div = (sum/mt)*100;
//     var p = Math.round(div,2);
//     return p;
// }

// function mainFunction(eng,phy,chem,total) {
//     var mark1 = eng;
//     var mark2 = phy;
//     var mark3 = chem;
//     var markt = total;
//     var avclac = avergCalc(mark1,mark2,mark3);
//     var pe = percenCalcu(mark1,mark2,mark3,markt);
//     document.write("averge marks :  "+avclac+"  <br> percentage is : "+pe +"&#37;");
// }
// mainFunction(eng,phy,chem,total);



// TASK 5
// var ch = prompt("Enter A charter to find it's index in string : PAKISTAN");
// ch = ch.toUpperCase();
// var str = 'PAKISTAN';
// function findC(c,s) {
//     var che= c;
//     var string =s;
//     var pos='';
//     for (let index = 0; index < string.length; index++) {
//         if (string[index]===che) {
//             pos=index;
//             break;
            
//         }
        
//     }
//     return pos;
// }

// document.write("Index of "+ch+" is "+findC(ch,str));



// TASK 6
// var sen = prompt("Enter Sentece to delete all vowels form that");
// sen = sen.toUpperCase();


// function delVowel(sentence) {

//     var s = sentence;
//     var arr =s.split('');
//     if (s.length<25) {
//         for (let index = 0; index < arr.length; index++) {
//             if (arr[index]=='A'||arr[index]=='E'||arr[index]=='I'||arr[index]=='O'||arr[index]=='U') {
//                 arr.splice(index,1);
//             }
//         }
        
//         var stri =arr.join('');
//         return stri;
//     } else {
//         alert("Your sentence must be less than 25 characters ");
//     }
  
// }

// document.write("Input Sentece "+sen+"<br> After Removal of Vowel : "+delVowel(sen));


// TASK 7
// var sen = prompt("Enter Sentece to find all succession vowels form that");
// sen = sen.toUpperCase();
// var newArray = [];
// var seni = "";
// function delVowel(sentence) {

//     var s = sentence;
//     var arr = s.split('');
//     var count = 0;
//     for (let index = 0; index < arr.length - 1; index++) {
//         var svalue = arr[index];
//         var s1value = arr[index + 1];
//         var set = svalue + s1value;
//         switch (set) {
//             case 'AE':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'AA':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'AI':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'AO':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'AU':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'EA':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'EE':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'EI':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'EO':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'EU':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'IE':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'IA':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'II':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'IO':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'IU':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'OA':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'OE':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'OI':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'OO':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'OU':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'UA':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'UE':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'UI':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'UO':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
                
//             case 'UU':
//                 count=count+1;
//                 newArray.push(set);
//                 break;
//         }
//     }

//     var stri = newArray.join(',');
//     seni = stri;
//     return count;

// }

// document.write("Input Sentece " + sen +"<br>Number succession Vowel  : "+ delVowel(sen) );
// document.write("<br> succession Voweles  : "+seni);



// TASK 8
// var val = +prompt("Enter Distance Between Two Cities");


// function calcMeters(val) {
    
//     var meter= val*1000;
//     return meter;
// }
// function calcFeet(val) {
//     var foot= val*3280.84;
//    return foot;
// }
// function calcCenti(val) {
//    var centi= val*100000;
//    return centi;
// }
// function CalcInch(val) {
//     var inch= val*39370;
//    return inch;
// }

// document.write("Distance in Meteres : "+calcMeters(val)+"<br> Distance in Feet's : "+calcFeet(val));
// document.write("<br> Distance in inches : "+CalcInch(val)+"<br> Distance in centiMeteres : "+calcCenti(val));



// TAsk 9
// var emp = +prompt("Enter numebr of  employes");

// var timeover = 0;



// function calcpay(emp) {
//     var e = emp;
//     var rate = 12;
//     var overtimepay =0;

//     for (let index = 0; index < e; index++) {
//         var workinghours =  +prompt("Enter working hours of employee "+(index+1));
//         if (workinghours>40) {
//             var overtime = workinghours- 40;
//             timeover +=overtime;
//             p=overtime*rate;
//             overtimepay +=p;
//         }
//     }
//     return overtimepay;
// }

// var payemntOfEmp = calcpay(emp);
// document.write("Number of Employes "+emp+ "<br> Overtime is : "+timeover+" hours <br> Ovetime Payment Rs : "+payemntOfEmp +" PKR");


// TASK 10
// var amount = +prompt("Enter Amount to Withdraw");

// function notes(a) {
//     var val  = a;
//     var Hnotes =0;
//     var Fnotes=0;
//     var Tnotes=0;
//     for (let index = 1; index < val; index++) {
//         if(val >=10) {
//             if(val >=50) {
//                 if (val>= 100) {
//                     Hnotes   = parseInt(val/100);
//                     val = val - (Hnotes*100);
//                     document.write("Notes of 100's : " +Hnotes + "<br>");
//                 }
//                 else{
//                     Fnotes = parseInt(val/50);
//                     val = val - (Fnotes*50);
//                     document.write("Notes of 50's : " +Fnotes +"<br>");
//                 } 
//             }
//             else{
//                 Tnotes = parseInt(val/10);
//                 val = val - (Tnotes*10);
//                 document.write("Notes of 10's : " +Tnotes+"<br>");
//             }
//         } 
//     }
//     document.write("Chiller is : " +val+"<br>");   
// }
// notes(amount);