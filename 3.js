//Given number n prime or not
function isPrime(n)
{
    if(n<=0)
    {
        console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
        return false;
    }
    else if(n===1)
    {
        console.log('1 is not prime ');
    }
    else if(n===2)
    {
        return true;
    }
    else if(n>2) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}
//isPrime(7)?console.log('prime'):console.log('not prime');