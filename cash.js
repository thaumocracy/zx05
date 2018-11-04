const cash = (cost) => {
    let innerCost = cost * 100;

    let counter = 0;
    while(innerCost > 0){
        if(innerCost >= 25) {
            counter++;
            innerCost -= 25;
        } else if (innerCost >= 10){
            counter++;
            innerCost -= 10;
        } else if (innerCost >= 5){
            counter++;
            innerCost -= 5;
        } else if(innerCost > 1){
            counter++;
            innerCost -= 1;
        } else if(innerCost === 1){
            counter++;
            innerCost = 0;
        }
    }
    return counter;
}