function makeDateString(userDate, tradeDate) {
    console.log(userDate, tradeDate)
    let userYear = userDate.getFullYear();
    let userMonth = userDate.getMonth();
    let myDate = userDate.getDate();

    console.log(userYear,userMonth, myDate)
    console.log(typeof tradeDate)
    console.log(typeof userDate)
    
    let tradeYear = tradeDate.substring(tradeDate.lastIndexOf("/")+1)
    let tradeMonth = tradeDate.substring(tradeDate.indexOf("/")+1, 
    tradeDate.lastIndexOf("/"))
    let tradeDay = tradeDate.substring(0,tradeDate.indexOf("/"));
    console.log(userYear,userMonth, myDate, tradeYear, tradeMonth, tradeDay)
    if(userYear === tradeYear &&
    userMonth === tradeMonth &&
    myDate === tradeDay) {
        return true
    }
    return false;
}

module.exports = {
    makeDateString
}