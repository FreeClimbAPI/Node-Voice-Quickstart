const express = require('express')
const app = express()
const freeclimbSDK = require('@freeclimb/sdk')
var port = process.env.PORT || 80

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.accountId
const authToken = process.env.authToken
const freeclimb = freeclimbSDK(accountId, authToken)

// Handles incoming requests on the /incomingCall endpoint
app.post('/incomingCal', (req, res) => {
  // Create Say script to greet caller
  const hello = freeclimb.percl.say("Hello world!")

  // Add greeting to PerCL script and append to response
  res.status(200).json(freeclimb.percl.build(hello))
})

app.listen(port)