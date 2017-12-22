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

function publishMessage(exchange, msg) {
    connProm.then(conn => {
        conn.createChannel().then(ch => {
            ch.publish(exchange, '', Buffer.from(msg))
        })
    })
}

function getMessage(queue, exchange) {
    amqpcb.connect('amqp://localhost', (err, conn) => {
        conn.createChannel((err, ch) => {
            ch.bindQueue(queue, exchange,'')
            ch.consume(queue, (msg) => {
                console.log(msg.content.toString())
                ch.ackAll()
            })
        })
    })
}
getMessage('test', 'testEx')
publishMessage('testEx', 'message from the node client')

module.exports = {
    getMessage, publishMessage
}