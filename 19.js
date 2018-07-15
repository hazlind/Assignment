function AddSub(a,b){
    var sum=[];
    var difference=[];
    if(a.length===b.length)
    {
        for(let i=0;i<a.length;i++)
        {
            sum[i]=a[i]+b[i];
            difference[i]=a[i]-b[i];
        }
        console.log('addition of a and b: '+sum);
        console.log('subtraction of a and b: '+difference);
    }
    else
    {
        console.log('they cannot be added or subtracted cause thier dimensionsare different');
    }
}
AddSub([1,2,3,4],[3,4,5,6]);
