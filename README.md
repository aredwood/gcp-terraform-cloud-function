## gcp-express-function

This is an example of how to use an express app, within a cloud function.

Cloud Functions can be fairly verbose sometimes - one of the common reasons why this happens, is the inability to use middleware, that can - for instance - be used to handle authentication on multiple routes at ones or routes specified after a point.

This repo is an example, of how you can easily build (or port) an express application into a cloud function. Doing this will allow you to utilise all of the middleware libraries that express has, as well as being able to structure your routes as you would with a traditional web app.

## Deployment

`yarn run build`

`yarn run deploy`

