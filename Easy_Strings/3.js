const Repeater = (str) => //Need to finish
{ 
    const Table = new Map()

    const digit = str.split('')
    for(char of digit)
    {
        if(!Table.has(char))
        {
            Table.set(char, 1)
        }
        else{
            Table.set(char, Table.get(char) + 1)
        }
    }

    return Table

}

console.log(Repeater(''))