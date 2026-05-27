let firstvalue = "";
let secondvalue = "";
let operator = "";
let result = "";

let display = document.getElementById("display");

function dataclicked(a) {

    if (display.value === "0") {
        display.value = "";
    }

    if (operator.length > 0) {
        secondvalue += a;
    } else {
        firstvalue += a;
    }

    display.value += a;
}

function opt(a) {

    if (firstvalue === "") return;

    if (operator !== "") return;

    operator = a;
    display.value += operator;
}

function ResultData() {

    if (firstvalue === "" || secondvalue === "" || operator === "") {
        return;
    }

    if (operator == "+") {
        result = Number(firstvalue) + Number(secondvalue);
    }
    else if (operator == "-") {
        result = Number(firstvalue) - Number(secondvalue);
    }
    else if (operator == "*") {
        result = Number(firstvalue) * Number(secondvalue);
    }
    else if (operator == "/") {

        if (Number(secondvalue) === 0) {
            result = "Cannot divide by 0";
        } else {
            result = Number(firstvalue) / Number(secondvalue);
        }
    }
    else if (operator == "%") {
        result = Number(firstvalue) % Number(secondvalue);
    }
    else {
        result = "Invalid Operator";
    }

    display.value = result;

    firstvalue = result.toString();
    secondvalue = "";
    operator = "";
}

function clearDisplay() {
    firstvalue = "";
    secondvalue = "";
    operator = "";
    result = "";

    display.value = "0";
}

function backspace() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
        if (operator.length > 0) {
            secondvalue = secondvalue.slice(0, -1);
        }
        else {
            firstvalue = firstvalue.slice(0, -1);
        }
    }
}

