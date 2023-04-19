# Node Voice Quickstart

This quickstart serves as a guide to get your first Voice application up and running with [FreeClimb](https://docs.freeclimb.com/docs/how-freeclimb-works).

Specifically, the project will:

- Receive an incoming call via a FreeClimb application
- Respond with a [PerCL](https://docs.freeclimb.com/reference/percl-overview) command to say 'Hello World!' to caller

## Tutorial

We offer a [{Language} Voice Quickstart Tutorial]({link to language-specific quickstart}) for more detailed set-up instructions and explanation of how FreeClimb works.

## Requirements

- A [FreeClimb account](https://www.freeclimb.com/dashboard/signup/)

- A [registered application](https://docs.freeclimb.com/docs/registering-and-configuring-an-application#register-an-app) with a named alias

- A [configured FreeClimb number](https://docs.freeclimb.com/docs/getting-and-configuring-a-freeclimb-number) assigned to your application

- Trial accounts: a [verified number](https://docs.freeclimb.com/docs/using-your-trial-account#verifying-outbound-numbers)

## Tools:

- [Node.js](https://nodejs.org/en/download/) 12.14.0 or higher
- [Yarn](https://yarnpkg.com/en/)
- [ngrok](https://ngrok.com/download) (recommended for hosting)

## Setting up the Quickstart

1. Install the required packages

   ```bash
   yarn install
   ```

2. Configure environment variables:

   | ENV VARIABLE | DESCRIPTION                                                                                                                            |
   | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID   | Account ID which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in dashboard. |
   | API_KEY      | API key which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in dashboard.    |

3. [Configure your applications's endpoints](https://docs.freeclimb.com/docs/registering-and-configuring-an-application#configure-your-application) by adding a publicly accessible URL (we recommend an [ngrok](https://ngrok.com/download) URL) and the route reference `/incomingCall` to your App Config's VoiceURL:

   ```bash
   https://YOUR-URL.ngrok.io/incomingCall
   ```

## Running the Quickstart

1. Start your voice quickstart application

   ```bash
   yarn start
   ```

2. Call the FreeClimb number assigned to the application you've configured for this tutorial

## Feedback & Issues

If you would like to give the team feedback or you encounter a problem, please [contact support](https://www.freeclimb.com/support/) or [submit a ticket](https://freeclimb.com/dashboard/portal/support) in the dashboard.
