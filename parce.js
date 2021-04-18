var A, B, C, output, check;

console.log('start');

function percentage_01() {


    // taking the values from inputs 

    A = parseInt(document.getElementById('marks').value);
    B = parseInt(document.getElementById('totalMarks').value);




    C = 100 *A / B + '%';
    document.getElementById('result').value=C;



    check = parseInt(C);
    
    if(check>=91) {
        output = "A+ Grade"
        document.getElementById('grade').value=output;
    }
    else if(check <= 91 && check >= 70) {
        output = "A Grade"
        document.getElementById('grade').value=output;
    }
    else if(check <= 70 && check >= 50) {
        output = "B Grade"
        document.getElementById('grade').value=output;
    }
    else if(check <= 50 && check>=35) {
        output = "C Grade"
        document.getElementById('grade').value=output;
    }
    else if(check <=35) {
        output = "FAIL"
        document.getElementById('grade').value=output;
    }
    

    return false;
}

console.log('End');