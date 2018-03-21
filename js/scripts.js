// var add = function(number1, number2) {
//         return number1 + number2;
//       };
//
//       var number1 = parseInt(prompt("Enter a number:"));
//       var number2 = parseInt(prompt("Enter another number:"));
//       var result = add(number1, number2);
//       alert(result);


// var BMI = function(height, weight){
//   return ((weight / height) / height);
// };
//
// var height = parseInt(prompt("Enter your height in Meters:"));
// var weight = parseInt(prompt("Enter your weight in Kg"));
// var result = BMI(height, weight);
// alert(result);




var BMI = function(){
  var weight = parseInt(prompt("Enter your weight in Kg:"));
  var height = parseInt(prompt("Enter your heigt in Meters:"));
  var ans = ((weight / height) / height);
  alert(ans);
};

BMI();


// var bmi = function(height,weight){
//   return ((weight / height) / height);
//
// };
//
//
// var anotherVar = bmi(55,40);
// alert(anotherVar);





// var bmi = function(x,y){
//   return ((x / y) / y);
// };
//
// var inputs = function(){
//   var weight = parseInt(prompt("Enter your weight in Kg:"));
//   var height = parseInt(prompt("Enter your height in Meters:"));
//   return bmi(height,weight);
// };
//
// var ans = function(){
//   alert(inputs());
// };
//
// ans();
