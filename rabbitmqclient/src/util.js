/*
alternate version with promises
function processMessage(que, exchange) {
    connProm.then(conn => {
        conn.createChannel().then(ch => {
            ch.assertExchange(exchange, 'fanout').then(ex =>{
                //console.log(ex)
                ch.assertQueue(que).then(q => {
                    //console.log(q, ex)
                    ch.bindQueue(q.queue, ex.exchange, '').then(() => {
                        //console.log("queue has been binded")
                        ch.consume(q.queue).
                        then(msg => {console.log("consuming messages");console.log(msg.content)})
                    })
                    // ch.consume(q.queue).then(msg => {
                    //      console.log("msg")
                    //  })
                })

            })
            // ch.assertQueue(que).then(q => {
            //     console.log('queue asserted, binding', q)
            //     ch.bindQueue(q.queue,exchange,'')
            //     console.log(`queue ${q.queue} binded`)
            //     ch.consume(q.queue).then(msg => {
            //     console.log(`received message ${msg}`)
            // })
            // })
        })
    })

}*/





// amqpcb.connect('amqp://localhost', (err, conn) => {
//     if(err) {
//         console.log('There has been an error', err)
//         return;
//     }
//     conn.createChannel((err, ch) => {
//         if(err) {
//             console.log('error connecting to the queue', err)
//             return;
//         }
//         ch.sendToQueue('test', Buffer.from("from nodejs"))
//         console.log("sent to RabbitMQ, closing the channel")
//         ch.close()
//     })

// })

// amqp.connect('amqp://localhost').then((conn) => {
//     console.log("connected")
//     conn.createChannel().then((ch) => {
//         console.log("created channel")
//         let ok = ch.assertQueue('test',{durable: true})
//         ok.then((_ok) => {
//             console.log("got ok")
//             ch.sendToQueue('test',Buffer.from("From Nodejs"))
//             return ch.close();
//         })        
//     }).finally(() => conn.close())
// })

//createExchange('testEx', {type:'fanout'})
//processMessage('test', 'testEx')