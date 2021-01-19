                //   CHP 31-34

// TASK 1
// var inpDate = new Date();
// document.write("<h2>" + inpDate + "<h/>");           


// TASK 2
// var date = new Date();
// var monthnum = date.getMonth();
// var month =[];
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// document.write(month[5]);



// TASK 3
// var date = new Date();
// var day = date.getDay();
// var days =[ "Sunday", "Monday", "Tuesday","Wednessday", "Thursday","Friday","Saturday"];
// document.write(" Today is  " + days[3]);


// TASK 4
// var date = new Date();
// var day = date.getDay();
// if(day === 0 || day === 6){
//     document.write("Today is Fun Day");
// }


// TASK 5

// var date = new Date();
// var d = date.getDate();

// if(d < 16 ){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }


// TASK 6

// var day = new Date();
// var miliSec = day.getTime();
// document.write("Current Date: " + day);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + miliSec);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + (miliSec/1000)/60);


// TASK 7

// var day = new Date();

// var time = day.getHours();

// if(time >= 0 && time < 12){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");

// }


// TASK 8
// var date = new Date();
// var laterDate = new Date(date.getFullYear(), date.getMonth()+6, 0);
// document.write("Later Date : " + laterDate);


// TASK 9
// var startRam = new Date("Monday April 12 2021");
// var firstRam = new Date("June 18, 2015");

// var milisecStart = startRam.getTime();


// var milisecFirst = firstRam.getTime();

// var diff = milisecStart-milisecFirst;

// var days = Math.round(diff/(1000*60*60*24));
// document.write(days + " Days have been passed Since 1st Ramdan 2015");


// TASK 10
// var Last = new Date("Sat Dec 05 2015 22:50:16");
// var first = new Date("Jan 1, 2015");

// var lastmili = Last.getTime();


// var firstmili = first.getTime();

// var diff = lastmili-firstmili;

// var seconds = Math.round(diff/(1000));
// document.write(" On Refrence date : "+Last + ", <br>"+seconds + " Seconds have been passed Since 1st Jan 2015");


// TASK 11
// var currentDate = new Date();
// var NextHour = new Date(currentDate.getFullYear(),currentDate.getMonth(), currentDate.getDate(),currentDate.getHours()+1,currentDate.getMinutes());
// document.write(" Current Date : "+NextHour + ", <br> After 1 hour it was : "+currentDate  );


// TASK 12
// var currentDate = new Date();
// var NextHour = new Date(currentDate.getFullYear()-100,currentDate.getMonth(), currentDate.getDate(),currentDate.getHours()+1,currentDate.getMinutes());
// document.write(" Current Date : "+currentDate + ", <br> 100 years Back it was : "+NextHour  );


// TASK 13
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var birthYear =1997;
// var bYears = year-birthYear; 


// document.write(" Your age is : "+ bYears + " <br> Your Birth Year : "+birthYear);


// TASK 14
// var currentDate = new Date();
// var consumerName = "John";
// var monthName = currentDate.getMonth();
// var month = ["Janurary", "Feburary","March","April","May","Jun","July","August","September","Octumber","November","December"]
// var units = 146;
// var unitPrice = 16;
// var latePayment = 350;
// var netAmount = units * unitPrice;
// var  grossAmount = netAmount+ latePayment;

// document.write(" <b> K-Electric Bill</b> <br> <br> <br> ");
// document.write(" Customer Name : <b>" + consumerName);
// document.write(" <br></b> Month :  <b>"+month[monthName]);
// document.write(" <br></b> Number of Units :  <b>"+units);
// document.write(" <br></b> Charges Per Unit :  <b>" +unitPrice);



// document.write("</b><br> <br> <br> Net Amount Payable (within Due Date) <b> : "+ netAmount);
// document.write(" <br> </b> Late Payment Surcharges <b> : "+ latePayment);
// document.write(" <br></b> Gross Amount Payable (after Due Date) <b> : "+ grossAmount);