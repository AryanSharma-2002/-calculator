// when click on any button it should be shown on .show-input

var op1 = "";
var op2 = "";
var operator = "";
var evaluate = function () {
    console.log("calcultion fired");
    if (isNaN(eval(op1 + " " + operator + " " + op2))) {
        console.log("Error");
        inputBox.value = "Error";
        return;
    }
    var result = "" + eval(op1 + " " + operator + " " + op2);

    console.log(result, typeof result);
    inputBox.value = result;
    op1 = "";
    op2 = "";
    operator = "";
};

var inputBox = document.getElementById("show-input");
console.log(inputBox);

var acBtn = document.getElementById("ac");
console.log(acBtn);
acBtn.addEventListener("click", function (e) {
    // when clicked on ac then inputBox khali ho jaye
    inputBox.value = "";
    op1 = "";
    op2 = "";
    operator = "";
});

var sign = document.getElementById("sign");
console.log(sign);
sign.addEventListener("click", function (e) {
    // when clicked on ac then inputBox khali ho jaye
    var content = inputBox.value;
    console.log(content);
    var operand = parseFloat(content);
    if (isNaN(operand) == false) {
        if (content[0] == '-') {
            inputBox.value = content.substr(1);;
        } else {
            inputBox.value = "-" + operand;
        }
    }
    else {
        console.log("error");
        inputBox.value = "";
    }
});

// ek hi line mai sara operation hai ya nhi returning a boolean value checking ki full operation in one line or not agar hai toh uska result bhi evaluate krvaya saath mai. example - 2 + 3 (space needed in between) or 2 add 3
var fullOperationInOneLine = function (s) {
    var i = s.indexOf(" ");
    var nextIndex = s.indexOf(" ", i + 1);
    if (i != -1 && nextIndex != -1) {
        var operation = s.substring(i + 1, nextIndex);
        operation = checkOperator(operation);
        console.log("operation -->", operation);
        var firstOp = s.substr(0, i);
        var secondOp = s.substring(nextIndex + 1, s.length);
        if ((!isNaN(parseFloat(firstOp))) || (!isNaN(parseFloat(secondOp)))) {
            op1 = firstOp;
            op2 = secondOp;
            operator = operation;
            evaluate();
            return true;
        }
    }
    return false;
}

// if click on enter then bhut saari cheeze
document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        // console.log("enter clicked");
        var val = inputBox.value;

        // in this if we can done that case in which operands and operator done in one place by space in between. example 2 + 3 or 2 add 3
        if (isNaN(Number(val))) {
            var check = fullOperationInOneLine(val);
            if (check) {
                return;
            }
        }
        var operation = checkOperator(val);
        // means ki sirf ek number hai
        if (!isNaN(parseFloat(val))) {
            if (op1 == "") {
                console.log("first operand added", val);
                op1 = val;
                inputBox.value = "";
            }
            else if (operator == "") {   // the case in which you will supply two numbers one after the other and not provide the operator
                console.log("Enter the operator first");
                alert("Enter the operator");
                inputBox.value = "";
            }
            else {     // so now first operand has some value and also operator is provided so this number is now second operand. And saath hi result bhi provide kar do.
                console.log("second operand added", val);
                op2 = val;
                inputBox.val = "";
                evaluate();
            }
            return;
        }
        // ab doosre cases ki matlab operator provide krke enter maar rhe
        else if (operation != "") {
            operator = operation;
            console.log("operator added ", operator);
        }
        inputBox.value = "";
    }
});

// yeh ek string leta aur check krega ki operator hai ya nhi. Agar nhi toh return krega "" empty string which is also acting as false in js 
function checkOperator(s) {
    var ans = "";
    if (s == "/" || s == "divide") {
        ans = "/";
    }
    else if (s == "*" || s == "multiply") {
        ans = "*";
    }
    else if (s == "-" || s == "subtract") {
        ans = "-";
    }
    else if (s == "+" || s == "add") {
        ans = "+";
    }
    else if (s == "%" || s == "mod") {
        ans = "%";
    }
    else {
        ans = "";
    }
    return ans;
}

// yeh maine ek-ek operator ke liye alag se events bnaye hai jinme kaam ek hi kiya bhut redundant neeche bhut easy ek loop lga kar kaam hogya
// // when clicked modulo
// var mod = document.getElementById("mod");
// mod.addEventListener("click", function (e) {
//     var val = inputBox.value;
//     if (operator != "") {
//         console.log("already entered operator");
//         alert("already entered operator");
//     }
//     else if (op1 == "" && isNaN(parseFloat(val)) == false) {   //means that writing operand 1 and then not clicking enter writing modulo sign instantly
//         op1 = val;
//         console.log("clicked modulo");
//         inputBox.value = "%";
//     }
//     else if (op1 == "") {      // means that not entered operand1 and trying to enter modulo sign or operand1 is not number
//         console.log("enter the operand ");
//         alert("enter the operand ");

//     }
//     else if (val == "") {      // if entered % by pressing enter in first operand
//         console.log("clicked modulo");
//         inputBox.value = "%";
//     }
// });
// // when clicked divide
// var divide = document.getElementById("divide");
// divide.addEventListener("click", function (e) {
//     var val = inputBox.value;
//     if (operator != "") {
//         console.log("already entered operator");
//         alert("already entered operator");
//     }
//     else if (op1 == "" && isNaN(parseFloat(val)) == false) {   //means that writing operand 1 and then not clicking enter writing modulo sign instantly
//         op1 = val;
//         console.log("clicked divide");
//         inputBox.value = "/";
//     }
//     else if (op1 == "") {      // means that not entered operand1 and trying to enter modulo sign or operand1 is not number
//         console.log("enter the operand ");
//         alert("enter the operand ");

//     }
//     else if (val == "") {
//         console.log("clicked divide");
//         inputBox.value = "/";
//     }
// });
// // when clicked multiply
// var multiply = document.getElementById("multiply");
// multiply.addEventListener("click", function (e) {
//     var val = inputBox.value;
//     if (operator != "") {
//         console.log("already entered operator");
//         alert("already entered operator");
//     }
//     else if (op1 == "" && isNaN(parseFloat(val)) == false) {   //means that writing operand 1 and then not clicking enter writing modulo sign instantly
//         op1 = val;
//         console.log("clicked multiply");
//         inputBox.value = "*";
//     }
//     else if (op1 == "") {      // means that not entered operand1 and trying to enter modulo sign or operand1 is not number
//         console.log("enter the operand ");
//         alert("enter the operand ");

//     }
//     else if (val == "") {
//         console.log("clicked multiply");
//         inputBox.value = "*";
//     }
// });
// // when clicked subtract
// var subtract = document.getElementById("subtract");
// subtract.addEventListener("click", function (e) {
//     var val = inputBox.value;
//     if (operator != "") {
//         console.log("already entered operator");
//         alert("already entered operator");
//     }
//     else if (op1 == "" && isNaN(parseFloat(val)) == false) {   //means that writing operand 1 and then not clicking enter writing modulo sign instantly
//         op1 = val;
//         console.log("clicked subtract");
//         inputBox.value = "-";
//     }
//     else if (op1 == "") {      // means that not entered operand1 and trying to enter modulo sign or operand1 is not number
//         console.log("enter the operand ");
//         alert("enter the operand ");

//     }
//     else if (val == "") {
//         console.log("clicked subtract");
//         inputBox.value = "-";
//     }
// });
// // when clicked add
// var add = document.getElementById("add");
// add.addEventListener("click", function (e) {
//     var val = inputBox.value; 
//     if (operator != "") {
//         console.log("already entered operator");
//         alert("already entered operator");
//     }
//     else if (op1 == "" && isNaN(parseFloat(val)) == false) {   //means that writing operand 1 and then not clicking enter writing modulo sign instantly
//         op1 = val;
//         console.log("clicked add");
//         inputBox.value = "+";
//     }
//     else if (op1 == "") {      // means that not entered operand1 and trying to enter modulo sign or operand1 is not number
//         console.log("enter the operand ");
//         alert("enter the operand ");

//     }
//     else if (val == "") {
//         console.log("clicked add");
//         inputBox.value = "+";
//     }
// });







console.log("handling operator click");
// clicking any operator handled by using loop pehle har ek ke liye alag bnaya bhut redundancy ab shi hai

var tasks = document.getElementsByClassName("operator");
// console.log(tasks);
for (var i = 0; i < tasks.length; i++) {
    var element = tasks[i];

    // now add event listener ki inn operators mai se agar koi click hota hai toh 
    element.addEventListener("click", function (e) {
        console.log("clicked any operator");
        var val = inputBox.value;
        var clicked = e.target;
        // console.log(clicked);
        var clickContent = clicked.innerHTML;
        if (operator != "") {
            console.log("already entered operator");
            alert("already entered operator");
        }
        else if (op1 == "" && isNaN(parseFloat(val)) == false) {   //means that writing operand 1 and then not clicking enter clicked on operator sign instantly
            op1 = val;
            console.log("clicked operator", clickContent);
            inputBox.value = clickContent;
        }
        else if (op1 == "") {      // means that not entered operand1 and trying to enter operator sign or operand1 is not number
            console.log("enter the operand ");
            alert("enter the operand ");
            inputBox.value = "";
        }
        else if (val == ""||checkOperator(val)!="") {
            console.log("clicked operator", clickContent);
            inputBox.value = clickContent;
        }

    });

}
// when clicked equal-to
var equal = document.getElementById("equal-to");
equal.addEventListener("click", function (e) {
    var val = inputBox.value;
    // pura operation ek hi line mai dal kar equal to dbaye 
    var check = fullOperationInOneLine(val);
    if (check) {  // matlab ki ek hi line mai pura operation ex-2 + 3
        return;
    }
    else if (op1 == "") {
        console.log("enter operands first");
        alert("enter operands first");
    }
    else if (!operator) {
        console.log("enter operator");
        alert("enter operator");
    }
    // ab ho skte ki second operand ke baad equal-to dbaye 
    else if (!isNaN(parseFloat(val))) {
        op2 = val;
        evaluate();
    }
    else {
        console.log("error");
        alert("Error");
    }
});



// now clicking on numbers 
var integers = document.querySelectorAll(".integer");
console.log(integers);
// same event listener on multiple functions by using loop on all the elements of integers 


for (var i = 0; i < integers.length; i++) {
    var element = integers[i];
    // console.log(element.innerHTML);
    element.addEventListener("click", function (e) {
        var val = inputBox.value;

        // these if-elseif ladder that inputBox mai operator hai uske baad koi Number dba rhe uske liye 
        var operation = checkOperator(val);
        if (operation != "") {
            operator = operation;
            inputBox.value = "";
            val = "";
        }

        var clicked = e.target;
        // console.log(clicked);
        var clickContent = clicked.innerHTML;

        inputBox.value = val + clickContent;
    });
}

