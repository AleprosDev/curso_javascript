let num = 0
i = 1
while (num <= 10){
    num++;
    i = num *i;
    if (i > 3628800){
        break;
    }
    
    console.log(i)
}