import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.CF_ID,
  accessToken: process.env.CF_TOKEN,
});
