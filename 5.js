//finding remainder without usuing modulus(%)
function Remainder(n,divisor) {
    var a;
    (typeof(n)==='number' && typeof(divisor)==='number')?a=1:a=0;
    switch (a){
        case 1:{
            var quotient, dpq, rem;
            quotient = n / divisor;
            // console.log(quotient);
            dpq=(n/divisor|0);                               //decimal part of quotient
            dpq=quotient-dpq;
            // console.log(dpq);
            rem= ( dpq* divisor)|0;
            console.log('remainder is', rem);
            break;
        }
        default:console.log('ERROR! invalid input...');
    }

}
Remainder(57,9);
