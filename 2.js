
//generate even or odd number less than n

function EvenOdd(n)
{
    var even=[];
    var odd=[];
    (n<=0)?a=0:a=1;
    switch(a) {
        case 0:
            console.log('you have either enter zero or a negative number and number you enetred is :', n);
            break;
        case 1: {
            for (let i = 1; i < n; i++) {
                if (i % 2 == 0) {
                    even.push(i);
                }
                else
                    odd.push(i);
            }
            console.log(even);
            console.log(odd);
            break;
        }
        default:console.log('ERRor!!input is invalid...');
    }
}
EvenOdd(20);

//generate N even or odd numbers
function NevenOdd(n)
{
    var even=[];
    var odd=[];
    (n<=0)?a=0:a=1;
    switch(a) {
        case 0:
            console.log('you have either enter zero or a negative number and number you enetred is :', n);
            break;
        case 1: {
            for(let i=1;i<=n*2;i++)
            {
                 if (i%2==0)
                {
                    even.push(i);
                }
                else
                    odd.push(i);
            }
            console.log(even);
            console.log(odd);
            break;
        }
        default:console.log('ERRor!!input is invalid...');
    }

}
NevenOdd(5);
