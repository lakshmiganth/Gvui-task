// part 2

// 1.var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i <= 10; i++) {
//   new_string += numsArr[i];
// }

// console.log(new_string);

// Output: 1234567891011
// -----------------------------------------------------------------

// 2.var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < 10; i++) {
//   new_string += numsArr[i] + ",";
// }

// console.log(new_string);

// Output: 1,2,3,4,5,6,7,8,9,10,11
// ------------------------------------------------------------------

// 3.var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = numsArr.length - 1; i >= 0; i--) {
//   new_string += numsArr[i] + " ";
// }

// console.log(new_string);

// Output: 11 10 9 8 7 6 5 4 3 2 1
// --------------------------------------------------------------------

// 4.var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     numsArr[i] = "even";
//   }
// }

// console.log(numsArr);

//  Output: [1, "even", 3, "even", 5, "even", 7, "even", 9, "even", 11]
// --------------------------------------------------------------------

// 5.var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < numsArr.length; i++) {
//  sum += numsArr[i];
// }
// console.log(sum);

// Output:66
// ---------------------------------------------------------------------

// 6.var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//   if(numsArr[i]%2==0)
//     sum += numsArr[i];
// }
// console.log(sum);

// Output:30
// ----------------------------------------------------------------------

// 7.var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//  console.log(numsArr[i]);
// }

// Output:

// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]
// --------------------------------------------------------------------

// 8.var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd = 0;
// var sum_even = 0;

// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++) {
//     if (inner_array[j] % 2 != 0) {
//       sum_odd += inner_array[j];
//     } else {
//       sum_even += inner_array[j];
//     }
//   }
// }

// console.log(sum_odd); 
// console.log(sum_even); 
// Output: 16
//  Output: 30
// -------------------------------------------------------------------

// 9.var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// var str_all = "";
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = inner_array.length - 1; j >= 0; j--) {
//     str_all += inner_array[j] + " ";
//   }
// }
// console.log(str_all.trim());

// Output: 11 10 9 8 7 6 5 4 3 2 1
// --------------------------------------------------------------------

// 10.var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for(var j = 0 ; j < inner_array.length; j++ ) {
//     if(inner_array[j] %2 == 0 ) {
//       inner_array[j] = "even";
//     }
//   }
// }
// console.log(numsArr);

// Output:[ [ 1, 'even', 3, 'even', 5 ], [ 6, 7, 'even', 9, 'even', 11 ] ]



