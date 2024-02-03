const { kafka } = require('./client');

async function init() {
    const producer = kafka.producer();

    console.log("connecting producer...");
    await producer.connect();
    console.log("producer connected!");

    await producer.send({
        topic: "dodo_eating",
        messages: [
            {
                partition: 0,
                key: "kuku",
                value: "kuku is eating good food"
            }
        ]
    });

    await producer.disconnect();
}

init();
