factorial = (value) => {
    if(value%1 !== 0){
        return "Please input a whole number";
    }
    else if(value < 0){
        return "Please input a positive number";
    }
    if(value === 0){
        return 1;
    }
    else{
        return value * factorial(value-1);
    }
}

palindrome = (string, position=0) => {
    if(string[position] !== string[string.length-1-position]){
        return false;
    }
    else if(string.length-1-position < position){
        return true;
    }
    return palindrome(string, position+1);
}