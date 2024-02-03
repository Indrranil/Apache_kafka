const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();

    console.log("Connecting...");

    try {
        await admin.connect();
        console.log("Connected!");

        console.log("Creating topic [dodo_eating]");
        await admin.createTopics({
            topics: [
                {
                    topic: "dodo_eating",
                    numPartitions: 2
                }
            ]
        });

        console.log("Topic created successfully [dodo_eating]");
    } catch (error) {
        console.error("Error creating topic:", error.message);
    } finally {
        console.log("Disconnecting...");
        await admin.disconnect();
    }
}

init();
