require("dotenv").config();
const freeclimbSDK = require("@freeclimb/sdk");
const express = require("express");

const app = express();
const { PerclScript, Say } = freeclimbSDK;

// Set up environment variables
// Your freeclimb Account Id API Key (available in the Dashboard) -
const accountId = process.env.ACCOUNT_ID;
const apiKey = process.env.API_KEY;
const port = process.env.PORT ?? 3000
const freeclimbConfig = freeclimbSDK.createConfiguration({
  accountId,
  apiKey,
});
const freeclimb = new freeclimbSDK.DefaultApi(freeclimbConfig);

// dynmically retrive hostname information to add to NGROK
// the purposes of these three lines is informational only and can be removed
const os = require("os");
const hostname = os.hostname();
const yourURL = `http://${hostname}:${port}`;

// Responds to incoming FreeClimb inbound webhook with PerCl
// https://docs.freeclimb.com/reference/inbound
app.post("/incomingCall", (req, res) => {
  // Create Say script to greet caller
  const script = new PerclScript({
    commands: [new Say({ text: "Hello World! " })],
  });

  // Add greeting to PerCL script and append to response
  console.log(`  perCL response is: ${JSON.stringify(script.build())}`);
  res.status(200).json(script.build());
});

// View your JSON PerCl HTTP Response in the browser
app.get("/incomingCall", (req, res) => {
  const script = new PerclScript({
    commands: [new Say({ text: "Hello World! " })],
  });

  res.status(200).json(script.build());
});

app.listen(port, () => {
  console.log(`\nWelcome to FreeClimb!\n`);
  if (typeof accountId === "undefined" || typeof apiKey === "undefined") {
    console.log("WARNING! - Your environment variables are not set.");
    console.log(
      "Refer to https://www.npmjs.com/package/dotenv for further instructions.\n"
    );
  } else {
    console.log(`Your api key is: ${apiKey}`);
    console.log(`Your account id: ${accountId}\n`);
  }

  console.log(`Your web server is listening at: ${yourURL}`);
  console.log(
    `View an example perCl JSON response to FreeClimb at: ${yourURL}/incomingCall\n`
  );

  console.log(
    `Your NEXT STEP is to use NGROK to proxy HTTP Traffic to this local web server.`
  );
  console.log(
    `  1. In NGROK, configure the dynamic url generate to proxy to ${yourURL}`
  );
  console.log(
    `  2. In the Dashboard or API, set your FreeClimb Application Voice Url to the dynamic NGROK endpoint generated.`
  );
  console.log(`\nListening on port: ${port}`);
});
