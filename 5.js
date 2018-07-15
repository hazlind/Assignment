//finding remainder without usuing modulus(%)
function remainder(n,divisor) {
    var quotient, dpq, rem;
    quotient = n / divisor;
    // console.log(quotient);
    dpq=(n/divisor|0);                               //decimal part of quotient
    dpq=quotient-dpq;
    // console.log(dpq);
    rem= ( dpq* divisor)|0;
    console.log('remained is', rem);
}
//remainder(57,9);
