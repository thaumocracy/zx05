const mario = (n) => {
    let space = " ";
    let symbol = "#"
    if(n > 0 && n <= 23){
        console.log("Valid number");
    
        for(let i = 1;i < n;i++){
            let string = space.repeat(n - i) + "" + symbol.repeat(i) + "  " + symbol.repeat(i) +  space.repeat(n - i) ;
            console.log(string);
        }
    } else {
        console.log(`Number ${n} is not valid, enter number from 1 to 23`)
    }
};