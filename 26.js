
function LeftShift(number,bitShift) {
    if(number<=0 )
    {
        console.log('you entered 0 or negative number! it is invalid!');
    }
    else if(bitShift<0)
    {
        console.log('you entered a  negative value for bitwise shift ! it is not valid ');
    }
    else
    {
        var leftShiftOp = number << bitShift;
        //to find to pow of 2
        var powOfTwo;
        for (let i = 0; i <= bitShift; i++) {
            if (i === 0) {
                powOfTwo = 1;
            }
            else if(i<0)
            {
                console.log('invalid');
                return;
            }
            else
                powOfTwo = powOfTwo * 2;
        }
        var generalFormulaForLeftShift = number * powOfTwo;
        console.log('leftshift: '+leftShiftOp);
        console.log('leftshift using general formula : '+generalFormulaForLeftShift);
        if (leftShiftOp === generalFormulaForLeftShift) {
            console.log('equal');

        }
        else {
            console.log('not equal');
        }
    }
}
LeftShift(4,3);
