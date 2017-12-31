const {Buffer} = require('buffer');

const amqp = require('amqplib')
const amqpcb = require('amqplib/callback_api')
let connProm = amqp.connect('amqp://localhost')

function createExchange(exchange, props) {
    connProm.then(conn => conn.createChannel().
    then(
        ch => {
            ch.assertExchange(exchange,props.type,props.config);
            ch.publish(exchange,'', Buffer.from('from nodejs via exchange'))
        }
    )
)
}

function publishMessage(exchange, routingKey, msg) {
    //console.log(msg)
    connProm.then(conn => {
        conn.createChannel().then(ch => {
            //console.log("publishing",msg)
            ch.publish(exchange, routingKey, Buffer.from(JSON.stringify(msg)))
            //console.log('msg published')
        })
    })
}

function getMessage(queue, exchange, cb) {
    //console.log(queue, exchange)
    amqpcb.connect('amqp://localhost', (err, conn) => {
        //console.log("connected")
        conn.createChannel((err, ch) => {
            ch.bindQueue(queue, exchange,'')
            //console.log('binded')
            ch.consume(queue, (msg) => {
                cb(msg.content.toString())
                ch.ackAll()
            })
        })
    })
}
//getMessage('test', 'testEx')
//publishMessage('testEx', 'message from the node client')

// getMessage('trade.queue','trade.ops', function cb(msg) {
//     console.log(">>>>>>>>");
//     console.log(msg)
// })

module.exports = {
    getMessage, publishMessage
}