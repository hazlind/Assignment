function RightShift(number,bitShift)
{
    if(number<=0 )
    {
        console.log('you entered 0 or negative number! it is invalid!');
    }
    else if(bitShift<0)
    {
        console.log('you entered a  negative value for bitwise shift ! it is not valid ');
    }
    else {
        var rightShiftOp = number >> bitShift;

        var powOfTwo;
        for (let i = 0; i <= bitShift; i++) {
            if (i === 0) {
                powOfTwo = 1;
            }
            else if (i < 0) {
                console.log('invalid');
                return;
            }
            else
                powOfTwo = powOfTwo * 2;
        }

        //finding right shift using general formula without any inbuilt methods using temp variables

        var ans = number / powOfTwo;
        var temp1 = number % powOfTwo;
        var temp2 = temp1 / powOfTwo;
        var generalFormulaRightShift = ans - temp2;
        console.log('Rightshift: '+rightShiftOp);
        console.log('Rightshift using general formula : '+generalFormulaRightShift);
        if (rightShiftOp === generalFormulaRightShift) {
            console.log('equal');

        }
        else {
            console.log('not equal');
        }
    }
}
RightShift(8,0);