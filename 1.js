function isEven(n)   //n is input
{  var a;
    (n<=0)?a=0:((n%2===0)?a=1:a=3);
    switch(a)
    {
        case 0:{
            console.log('it is 0 or lesser than 0 , and the number u enter is: '+n);
            break;
        }
        case 1:{
            console.log('it is even ');
            break;
        }
        case 2:{
            conosle.log('it is odd');
            break;
        }
        default:console.log('ERROR!!input is invald...');
    }
}
 isEven('a');

