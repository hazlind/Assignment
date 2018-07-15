function SwapArray(a,b)
{
    var temp;
    var n;
    (a.length===b.length)?n=a.length:(a.length>b.length)?n=a.length:n=b.length;
    for(let i=0;i<n;i++)
    {
        temp=a[i];
        a[i]=b[i];
        b[i]=temp;
    }
    console.log(a);
    console.log(b);
}
SwapArray([1,2,3,4],[5,6,7,8,9,7]);