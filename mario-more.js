const mario = (n) => {
    let space = " ";
    let symbol = "#"
    debugger;
    if(n >= 0 && n <= 23){
        for(let i = 0;i < n;i++){
            let string = space.repeat(n - i) + "" + symbol.repeat(i + 1) + "  " + symbol.repeat(i + 1) +  space.repeat(n - i) ;
            console.log(string);
        }
    } else {
        console.log(`Number ${n} is not valid, enter number from 0 to 23`)
    }
};