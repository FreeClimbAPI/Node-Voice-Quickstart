// snippet from server.js or the root-level file of your choice for your app
const express = require('express')
const app = express()
const { DefaultApi, createConfiguration }= require('@freeclimb/sdk')
const port = process.env.PORT || 80

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const configuration = createConfiguration({
    username: accountId,
    password: apiKey
})
const freeclimb = new DefaultApi(configuration)

// Handles incoming requests on the /incomingCall endpoint
app.post('/incomingCall', (req, res) => res.status(200))

app.listen(port, () => {
    console.log('Running on port', port)
})