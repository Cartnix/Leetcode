const Search = (n) =>
{
    if(n === false)
    {
        return n
    }

    let left = 0
    let right = n

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2) // False = РАБОТАЕТ TRUE = НЕ РАБОТАЕТ 

        if(mid === false)
        {
            left = mid + 1
        } else if(mid === true)
        {
            if(mid - 1 === true)
            {
                right = mid - 1
            } else{
                return mid
            }
        }
    }
  
}

console.log(Search(5,4))