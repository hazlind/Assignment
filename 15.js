function PowerOf2(n)
{
    if(n===0)
    {
        return 1;
    }
    else
    {
        return 2*PowerOf2(n-1);
    }
}
var ans=PowerOf2(3);
console.log(ans);
