function Minus(a,b)
 { var n;
     (typeof(a)==='number' && typeof(b)==='number')?n=1:n=0;
     switch (n){
         case 1:{
             var difference;
             var c=~b;
             difference=a+c+1;
             console.log(difference);
             break;
         }
         default:console.log('ERROR! invalid input...');
     }

}
Minus(4,6);
