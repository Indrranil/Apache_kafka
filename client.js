const { Kafka } = require("kafkajs");


exports. kafka = new Kafka({
    clientId: "DODO",
    brokers: ["192.168.158.137:9092"]
});