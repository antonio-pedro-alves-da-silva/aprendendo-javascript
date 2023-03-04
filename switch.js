function calculate(number1,operator,number2){
    let result;
    switch(operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        default:
            result = 'operador não existe ou não implementado'
    }
    return result
}