function triangle(a,b,c)
{
    var n;
    if(a===b && a===c)
    {
        n=1;
    }
    else if(a===b || b===c || c===a)
    {
        n=2;
    }
    else
    {
        n=3;
    }
    switch(n)
    {
        case 1:
            console.log('equilateral triangle');
            break;
        case 2:
            console.log('isosceles triangle');
            break;
        case 3:
            console.log('scalene triangle');
            break;
        default:console.log('error input');
                break;
    }

}
triangle(2,3,2)