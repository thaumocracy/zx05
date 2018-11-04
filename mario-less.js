const mario = (n) => {
    const space = " ";
    const symbol = "#";
    for(let i = 0 ; i < n;i++ ){
        let string = space.repeat( n - i) + symbol.repeat(i+2);
        console.log(string);
    }
}