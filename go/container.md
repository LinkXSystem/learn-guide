> RabbitMQ 的 Docker 部署

```
docker pull rabbitmq:management

docker run -d --name golang-rabbit --publish 5671:5671 \
 --publish 5672:5672 --publish 4369:4369 --publish 25672:25672 --publish 15671:15671 --publish 15672:15672 \
rabbitmq:management
```
