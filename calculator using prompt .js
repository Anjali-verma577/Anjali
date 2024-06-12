
let num1 =  prompt("enter first number:");
let num2 = prompt("Enter second number:");
let operation = prompt("Choose an operation(+,-,*):");
let result; 
switch(operation)
{
    case'+':
    return num1 + num2;
    break;
    case'-':
    return num1 - num2;
    break;
    case'*':
    return num1 * num2;
    break;
    //case'/':
    //return num1/num2;
}
console.log("Result:"+result);