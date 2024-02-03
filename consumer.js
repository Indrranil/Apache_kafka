const { kafka } = require("./client");

async function init() { 
    const consumer = kafka.consumer({ groupId: "user-1" });
    await consumer.connect();

    await consumer.subscribe({
        topic: "dodo_eating",
        fromBeginning: true,
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`[${topic}]: PART:${partition}:${message.value.toString()}`);
        }
    });
}

init();
