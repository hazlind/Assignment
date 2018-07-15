
//generate even or odd number less than n

function EvenOdd(n)
{
    var even=[];
    var odd=[];
    for(let i=0;i<n;i++)
    {

        if(i<=0 )
        {
            console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
        }
        else if (i%2==0)
        {
            even.push(i);
        }
        else
            odd.push(i);
    }
    console.log(even);
    console.log(odd);
}
//EvenOdd(20);

//generate N even or odd numbers
function NevenOdd(n)
{
    var even=[];
    var odd=[];

    for(let i=0;i<=n*2;i++)
    {
        if(i<=0 )
        {
            console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
        }
        else if (i%2==0)
        {
            even.push(i);
        }
        else
            odd.push(i);
    }
    console.log(even);
    console.log(odd);

}
//NevenOdd(5);
