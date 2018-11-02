const cash = (cost) => {
    debugger;
    let innerCost = Number(cost.toPrecision(2));

    let counter = 0;
    while(innerCost > 0){
        if(innerCost >= 0.25) {
            counter++;
            innerCost -= 0.25;
        } else if (innerCost >= 0.10){
            counter++;
            innerCost -= 0.10;
        } else if (innerCost >= 0.05){
            counter++;
            innerCost -= 0.05;
        } else if(innerCost > 0.01){
            counter++;
            innerCost -= 0.01;
        } else if(innerCost === 0.01){
            counter++;
            innerCost = 0;
        }
    }
    return counter;
}