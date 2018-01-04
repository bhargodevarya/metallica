The following items are pending:-

1. Test coverage is not up to the mark
2. Service discovery is tricky, because nodejs does not integrate well with eureka. With Java its very simple using spring stack, for node there is an npm package present but it is not very credible.Still figuring out the best way to do it.

Prerequisites:

Nodejs
npm
Rabbitmq
Mongodb

In RabbitMQ, please make sure you have created the following:-
>Two exchanges of type "direct":
1. trade.ops
2. market.ops
>Three queues which are bound to these exchanges
1. market.data bounded to market.ops with key data.market
2. trade.queue.get to trade.ops with key trade.get
3. trade.queue.updates to trade.ops with key trade.update

To install dependencies:-
execute "npm install" in the following directories one by one:

client, marketservice, notificationservice, rabbitmqclient, refdataservice, tradeservice

First start the backend services in the following order:-

cd into the directory and execute "npm run dev"
1. refdataservice
2. tradeservice
3. notificationservice
4. marketservice

After successfull startup of the backend services, start the client by running the following in the client directory

npm run dev

This will take you to the homepage, login with your google account and then create a few trades and execute the search.