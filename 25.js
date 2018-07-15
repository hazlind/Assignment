function Decimal2Binary(n)
{
    var a;
    if(typeof(n) == 'number')
    {
        a=1;
    }
    else
    {
        a=0;
    }
    switch (a)
    {
        case  1:
                {
            var temp = n;
            var ans = [];
            var r = 0;
            while (n != 0) {
                r = n % 2;
                ans.push(r);
                n = (n / 2 | 0);
            }
            console.log(ans + ' is binary value of : ' + temp);
            }
            break;
        default:console.log('invalid number enter or error has occured!!')
    }

}
Decimal2Binary(5)

