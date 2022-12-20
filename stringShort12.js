function shortest (str_array)
{
    let shortest_index = 0;
    for (var index=1; index<str_array.length;index+=1)
    {
        if (str_array[index].length < str_array[shortest_index].length)
        shortest_index = index;
    }

    return str_array[shortest_index];
}

let s = ['Edison', 'Kamala', 'Maria', 'Christina']

console.log(shortest(s));