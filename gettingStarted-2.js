const express = require('express')
const app = express()
const { DefaultApi, createConfiguration, Say, PerclScript } = require('@freeclimb/sdk')
const port = process.env.PORT || 80

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const configuration = createConfiguration({ accountId, apiKey })
const freeclimb = new DefaultApi(configuration)

// Handles incoming requests on the /incomingCall endpoint
app.post('/incomingCall', (req, res) => {
  // Create Say script to greet caller
  const hello = new Say({ text: "Hello world!" })

  // Add greeting to PerCL script and append to response
  res.status(200).json(new PerclScript({ commands: [hello] }).build())
})

app.listen(port, () => {
  console.log('Running on port', port)
})