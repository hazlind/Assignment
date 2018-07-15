function VowelConsonant(a)
{
    var vowel=['a','e','i','o','u','A','E','I','O','U'];
    var isVowel=false;
    for(let i=0;i<vowel.length;i++)
    {
        if(vowel[i]===a)
        {
            isVowel=true;
            break;
        }
    }
    isVowel?console.log('it is vowel :'+a):console.log('not vowel');
}
VowelConsonant('q');