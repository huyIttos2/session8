function isFirsrLetterUpperCase(str) {
    regExp = /[^A-Z]/;
    if(regExp.test(str)){
        console.log("String's first character is upperCase");
    }else{
        console.log("String's first character is not upperCase");
    }

}
isFirsrLetterUpperCase('Abcd');
isFirsrLetterUpperCase('abcd');