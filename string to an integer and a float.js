function parseAndcalculate(inputString)
{
    let integerValue = parseInt(inputString);
    let floatvalue = parseFloat(inputString);
    let additionResult = integerValue + floatvalue;
    let subtractResult = integerValue + floatvalue;
    let multiplyResult = integerValue + floatvalue;

console.log("Integer value:",integerValue);
console.log("Float value:",floatvalue);
console.log("Addition result:",additionResult);
console.log("Subtraction rseult:",subtractResult);
console.log("Multiplication result:",multiplyResult);
}
parseAndcalculate("10.5");