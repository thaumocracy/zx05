const creditValidation = (id) => {
    debugger;
    let checkIn = String(id);
    if(checkIn.length === 13 || checkIn.length === 15 || checkIn.length === 16){
        console.log("Valid card length pattern")
        let checksum = 0;
        for(let i = 1;i < checkIn.length; i += 2){
            let currentNumber = checkIn[i] * 2;
            console.log(currentNumber)
            checksum += currentNumber;
        }
        console.log(`${checksum} after first loop`)
        for(let i = 0;i < checkIn.length; i += 2){
            let currentNumber = Number(checkIn[i]) ;
            console.log(currentNumber)
            checksum += currentNumber;
        }
        console.log(`${checksum} after second loop`)
        return checksum;
    }
}