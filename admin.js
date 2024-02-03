const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [dodo-eating]");
  await admin.createTopics({
    topics: [
      {
        topic: "dodo-eating",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [dodo-eating]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();