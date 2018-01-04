const MetalInfo = require('./schema/MetalInfo')
const qClient = require('../../rabbitmqclient/src/index')

let AU = new MetalInfo('AU', 100)
let AL = new MetalInfo('AL', 100)
let AG = new MetalInfo('AG', 100)
let CU = new MetalInfo('CU', 100)
let ZN = new MetalInfo('ZN', 100)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

setInterval(() => {
    qClient.publishMessage('market.ops','data.market',{
        'AU':getRandomInt(100,2000),
        'AL':getRandomInt(100,2000),
        'AG':getRandomInt(100,2000),
        'CU':getRandomInt(100,2000),
        'ZN':getRandomInt(100,2000)
                
    })
},5000)