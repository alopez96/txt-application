
function myFunction() {
    var num1, num2, num3;
    // Get the values of the input fields
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;

    var array;
    //JS sort function reads string 10 less than 3 because 1 < 3,
    //using callback to compare the numbers as num instead of string
    array = [num1, num2, num3].sort(function(a,b){
        return a - b;
    });
    array.toString();

    //assign result to id for display
    document.getElementById("result").innerHTML = array;
  }