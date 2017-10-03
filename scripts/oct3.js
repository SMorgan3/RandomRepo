//Simple function to test html/js attachment
function test() {
    alert("Hello World");
}


function readText() {
    //Grab input element from document
    var input1 = document.getElementById("input1");

    //Store value from input1 to theText variable
    var theText = input1.value;

    //Demonstrate
    alert("value is " + theText);
   
    //Make the value all uppercase
    var upperCase = theText.toUpperCase();

    //Grab output1 element
    var output1 = document.getElementById("output1");

    //Put uppercased input value into output1 field
    output1.value = upperCase;
}


