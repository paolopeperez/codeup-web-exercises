//// (************************************function with while  ***************************
// function showMultiplicationTable(num) {
//     for (i = 1; i <=10; i +=1) {}
//     var i = 1;
//     while (i <= 10) {
//         console.log(num + "x" + i + "=" + parseInt(num*i));
//         i += 1;
//     }
//     return "nothing to return";
//     }
//
// console.log(showMultiplicationTable(9));

// (************************************Same exercise but with for ***************************


// function showMultiplicationTable(num) {
//     for (i = 1; i <=10; i +=1) {
//         console.log(num + "x" + i + "=" + parseInt(num*i));
//     }
//     return "nothing to return";
// }

// console.log(showMultiplicationTable(9));


// *******************************Use a for loop and the code from the previous lessons to generate 10
// random numbers between 20 and 200 and output to the console
// whether each number is odd or even. For example:


// function isEven(x) {
//     return parseFloat(x) % 2 === 0;
// }
//
// for (i = 1; i <= 10; i +=1) {
//     var random = Math.floor((Math.random() * 200) + 20);
//     if (isEven(random)) {
//         console.log("your number " + random + " is EVEN");
//     } else {
//         console.log("your number " + random + " is ODD");
//     }
//
// }

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (i = 1; i < 10; i +=1) {
    var output = "";
    for (j = 0; j < i; j +=1) {
        output += i;
    }
    console.log(output);
}