function length_string (input_str)
{
    return input_str.length;
}

function length_string_2 (a) 
{
    let i = 0;
    if (!a) return 0;
    
    while (a[i])
    {
        i++;
    }
    return i;
}


console.log(length_string_2 ('test'))

let length1 = length_string_2 ('test again')
console.log(length1);

console.log('kjhsdkjhsdhkj'.length)

console.log(length_string_2(''))