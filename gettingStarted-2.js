const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const freeclimbSDK = require('@freeclimb/sdk')
const port = process.env.PORT || 80
const signingSecret = process.env.SIGNING_SECRET

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeclimb = freeclimbSDK(accountId, authToken)

// Handles incoming requests on the /incomingCall endpoint
app.post('/incomingCall', (req, res) => {
  // Create Say script to greet caller
  const signatureHeader = req.headers['freeclimb-signature'];
  const requestBody = JSON.stringify(req.body);
  freeclimb.utils.verifyRequest(requestBody, signatureHeader, signingSecret);

  const hello = freeclimb.percl.say("Hello world!")

  // Add greeting to PerCL script and append to response
  res.status(200).json(freeclimb.percl.build(hello))
})

app.listen(port)