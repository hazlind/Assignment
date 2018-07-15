//Prime numbers less than n
function Prime(n)
{
    var p=[];
    if(n<=0)
    {
        console.log('the number is either zero or negative number !! it is invalid');
    }
    else {
        for (let i = 1; i <= n; i++)
        {

            var notPrime = false;
            for (let j = 2; j <= i; j++) {
                if (i % j === 0 && j !== i) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                p.push(i);
            }
        }
    }
    console.log(p+' are prime numbers less than :'+n);
}
//Prime(8);


//finding n prime numbers
function PrimeN(n) {
    var p = [];
    if (n <= 0) {
        console.log('the number is either zero or negative number !! it is invalid');
    }
    else {

     for(let i=1;p.length<n;i++) {
         var notPrime = false;
         for (let j = 2; j < i; j++) {
             if (i % j === 0 && j !== i) {
                 notPrime = true;
             }
         }
         if (notPrime === false) {
             p.push(i);
         }
     }
    }


    console.log(p + ' are prime numbers less than :'+n);
}
//PrimeN(20);


//Prime numbers within range
function PrimeRange(a,b) {
    var p = [];
    if (a <= 0 && b<=0) {
        console.log('the number is either zero or negative number !! it is invalid');
    }
    else {
        for (let i = a; i <=b; i++) {

            var notPrime = false;
            for (let j = 2; j <= i; j++) {
                if (i % j === 0 && j !== i) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                p.push(i);
            }
        }
    }


    console.log(p + ' are prime numbers between:' + a+'and '+b);
}
PrimeRange(2,8)



