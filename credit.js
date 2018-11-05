const creditValidation = (id) => {
    let checkstring = String(id);
    let checksum = 0;
    let checkMassive = [];
    let returnString = "base";
    debugger;
    if(checkstring.length === 13 || checkstring.length === 15 ||  checkstring.length === 16){
        for(let i = 1;i < checkstring.length;i += 2){
          checkMassive.push(String(Number(checkstring[i]) * 2));
        }
        for(let i = 0;i < checkstring.length;i += 2){
            checksum += Number(checkstring[i]);
          }
        for(let i = 0;i <  checkMassive.length;i++){
            for(let j = 0; j < checkMassive[i].length;j++){
                checksum += Number(checkMassive[i][j]);
            }
        }
        if(checksum % 10 === 0){
            if(checkstring[0]+checkstring[1] === '37' || checkstring[0]+checkstring[1] === '34'){
                returnString = "Valid American Express";
            } else if ((checkstring[0]+checkstring[1]) === '51'
                            || (checkstring[0]+checkstring[1]) === '52'
                            || (checkstring[0]+checkstring[1]) === '53'
                            || (checkstring[0]+checkstring[1]) === '54'
                            || (checkstring[0]+checkstring[1]) === '55'
              ) {
                returnString = "Valid MasterCard";
            } else if(checkstring[0] === '4'){
                returnString = "Valid Visa";
            }
            
        }
    } else {
        returnString =  "Card is invalid";
    }
    return returnString;
}