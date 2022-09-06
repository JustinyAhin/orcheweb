import { GraphQLClient } from "graphql-request";
import { getSdk } from "./storyblok";

const client = new GraphQLClient("https://gapi.storyblok.com/v1/api", {
  headers: {
    Token: import.meta.env.STORYBLOCK_ACCESS_TOKEN,
  },
});

const sdk = getSdk(client);

export { sdk };
