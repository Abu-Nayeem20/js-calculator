
// get field value

function getFieldValue(fieldValue){
    inputPanel.value = inputPanel.value + fieldValue;
}

function fieldClear(){
    inputPanel.value = '';
}

function calculate(equal){
    inputPanel.value = eval(equal);
}

function back(){
    const fieldValue = inputPanel.value;
    inputPanel.value = fieldValue.substr(0, fieldValue.length - 1);
}

