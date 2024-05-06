const freeclimbSDK = require("@freeclimb/sdk");
const express = require("express");

const app = express();
const { PerclScript, Say } = freeclimbSDK;

const port = process.env.PORT ?? 3000

// Responds to incoming FreeClimb inbound webhook with PerCl
// https://docs.freeclimb.com/reference/inbound
app.post("/incomingCall", (req, res) => {
  // Create Say script to greet caller
  const script = new PerclScript({
    commands: [new Say({ text: "Hello, World! " })],
  });

  // Add greeting to PerCL script and append to response
  console.log(`  perCL response is: ${JSON.stringify(script.build())}`);
  res.status(200).json(script.build());
});

// View your JSON PerCl HTTP Response in the browser
app.get("/incomingCall", (req, res) => {
  const script = new PerclScript({
    commands: [new Say({ text: "Hello, World! " })],
  });

  res.status(200).json(script.build());
});

app.listen(port, () => {
  const localUrl = `http://127.0.0.1:${port}`

  console.log(`\nWelcome to FreeClimb!\n`);

  console.log(`Your web server is listening at: ${localUrl}`);
  console.log(
    `View an example perCl JSON response to FreeClimb at: ${localUrl}/incomingCall\n`
  );

  console.log(
    `Your NEXT STEP is to use NGROK to proxy HTTP Traffic to this local web server.`
  );
  console.log(
    `  1. In NGROK, configure the dynamic url generate to proxy to ${localUrl}`
  );
  console.log(
    `  2. In the Dashboard or API, set your FreeClimb Application Voice Url to the dynamic NGROK endpoint generated.`
  );
  console.log(`\nListening on port: ${port}`);
});
