function RootsOfQuadraticEq(a,b,c)
{
    var determinant=(b*b)+(4*a*c);
    var root1;
    var root2;
    var n;
    if(determinant>0){
        n=1;
    }
    else if(determinant===0){
        n=2;
    }
    else
    {
        n=3;
    }

    switch (n)
    {
        case 1: {
                               root1 = (-b + Math.sqrt(determinant)) / (2 * a);
                               root2 = (-b - Math.sqrt(determinant)) / (2 * a);
                                console.log('Root1:' + root1 + 'Root2:' + root2+'roots are real');
                              break
        }
        case 2:{
                               root1=root2=-b/(2*a);
                               console.log('Root1:' + root1 + 'Root2:' + root2+'roots are equal');
            break
        }
        case 3:{
                                var real;
                                var imaginary;
                                real = -b/(2*a);
                                imaginary = sqrt(-determinant)/(2*a);
                                root1=real+imaginary+'i';
                                root2=real-imaginary-'i';
                                console.log('Root1:' + root1 + 'Root2:' + root2+'roots are imaginary');
            break
        }
    }
}
RootsOfQuadraticEq(1,4,2);