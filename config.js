// Which Salesforce the app talks to. No secret lives here: the client id is public by design
// (the login uses PKCE), and every call is made with the signed-in RM's own Salesforce login.
export const CONFIG = {
  appName: "MIRA RM",
  version: "0.21.0",
  environment: "Production",
  loginUrl: "https://miradevelopments.my.salesforce.com",
  clientId:
    "3MVG9Xl3BC6VHB.YdJBocF7AVkPgMxECjnh3oTpW4u0UgvREZjPa1vtFGOVbdQV4rpjHX2culhXfIJlky7QZW",
  scopes: "api refresh_token",
  apiPath: "/services/apexrest/rmapp/v1/"
};
