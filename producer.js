const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    const [what, state] = line.split(" ");
    await producer.send({
      topic: "dodo-updates",
      messages: [
        {
          partition: state.toLowerCase() === "hot" ? 0 : 1,
          key: "dodo-update",
          value: JSON.stringify({ name: what, state }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();
