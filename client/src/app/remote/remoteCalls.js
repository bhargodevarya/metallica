const axios = require('axios')

// axios.get('http://localhost:4000/trade/getAllTrades').then(res => {
//     //console.log(res.data)
// }).catch(err => {
//     console.log("There has been an error", err)
// })

axios.post('http://localhost:4000/trade/search', {
    "from":"2017-12-15",
    "to":"2017-12-18",
    "location":"NY",
    "side":"Buy",
    "commodity":"AL"
}).then(res => {
    console.log(res.data)
})