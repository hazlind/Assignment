function factorial(n)
{
    var fact=1;
    for(let i=0;i<=n;i++)
    {
        if(i===0)
        {
            fact=1;
        }
        else
        {
            fact=fact*i;
        }
    }
    console.log(fact);
}
//factorial(4);


function factorialR(n)
{
    if(n<=1)
    {
        return 1;
    }
    else
        return n*factorialR(n-1);
}
//console.log(factorialR(4));

function factorial(n)
{
    return (n<=1)?1:n*factorial(n-1);
}
console.log(factorialR(4))



//fibonacci
function fibn(n)
{
    var fib=[];
    for(let i=0;i<=n;i++)
    {
        if(i===0 || i===1)
        {
            fib[i]=i;
        }
        else
        {
            fib[i]=fib[i-1]+fib[i-2];  //fib.push(fib(n-1)+fib(n-2))
        }
    }
    console.log(fib);
}
//fibn(6)

function fib(n)
{
    if( n===1)
    {
        return 1;
    }
    else if(n<=0)
    {
        return 0;
    }
    else
    {
        return fib(n-1)+fib(n-2) ;
    }

}
function print(n) {
    var x=[];
    for (let i = 0; i < n; i++) {
        x.push(fib(i));
    }
    console.log(x);
}
print(4)



//here iterative is more efficient for fibonacci series cause repeatative calculations are not happening and in recurrsion repeatative operations are happening and even though fib(3) is calculated again when it encounters fib(3) it will hav stack for it ....
