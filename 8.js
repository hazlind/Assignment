//sum of array
function ArraySum(arr)
{
    var sum=0;
    if(arr.length===0)
    {
        console.log('empty array');
    }
    else
    {
        for(let i=0;i<arr.length;i++)
        {
            sum=sum+arr[i];
        }
        console.log('Sum of Array is :'+sum);
    }

}
//ArraySum([1,2,4,3,7,6,8]);
