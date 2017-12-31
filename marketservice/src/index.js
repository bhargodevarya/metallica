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
    AU.price=getRandomInt(1000,2000)
    AG.price=getRandomInt(1000,2000)
    AL.price=getRandomInt(1000,2000)
    CU.price=getRandomInt(1000,2000)
    ZN.price=getRandomInt(1000,2000)
    //console.log(AU,AG,AL,CU,ZN)
    qClient.publishMessage('market.ops','data.au',AU)
    qClient.publishMessage('market.ops','data.ag',AG)
    qClient.publishMessage('market.ops','data.al',AL)
    qClient.publishMessage('market.ops','data.cu',CU)
    qClient.publishMessage('market.ops','data.zn',ZN)
},5000)