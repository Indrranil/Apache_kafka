# Apache Kafka with Zookeeper using Docker

This guide walks you through setting up Apache Kafka with Zookeeper using Docker containers.

## Step 1: Run Zookeeper Container

```bash
docker run -p 2181:2181 zookeeper
```

## Step 2: Run Kafka Container

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

Replace <PRIVATE_IP> with your machine's private IP address. This command starts a Kafka container and connects it to the Zookeeper container.

## Step 3: Set Up Kafka Producer and Consumer
```bash
npm install
```

## Step 4: Start Kafka Producer
```bash
node producer.js
```

This command starts the Kafka producer to send messages to the Kafka topic.
```bash
node consumer.js <GROUP_ID>
```

Replace <GROUP_ID> with the desired Kafka consumer group ID. This command starts the Kafka consumer to receive messages from the Kafka topic.
