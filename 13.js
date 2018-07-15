function LeapYear(y)
{
    var leapYear=false;
    if((y%4)===0)
    {
        if((y%100)===0)
        {
            if((y%400)===0)
            {
                leapYear=true;

            }
        }
    }

    (leapYear)? console.log('it is leap year:' + y):console.log('not leap year :'+y);

}
LeapYear(2000);