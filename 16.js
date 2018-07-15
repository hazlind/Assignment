function isAlphabet(x)
{
 var n=x.charCodeAt(0);

    if((n>=97 && n<=122) || (n>=65 && n<=90))
    {
        console.log('it is alphabet :'+x);
    }
    else
    {
        console.log('not an alphabet');
    }
}
isAlphabet('a');