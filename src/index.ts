import express from "express";

// create an app instance
const app = express();

// enable JSON payloads on POSTS
app.use(express.json());

// use middle ware to add a header to every request
// it is also possible to put AUTH logic here.
app.use((req, res, next) => {
    res.setHeader("x-express-cloud-function", "true");
    next();
});

// this is the base url of the function
app.get("/", (req, res) => {

    // send an OK
    res.sendStatus(200);
});

// add another route
app.get("/anotherRoute", (req, res) => {
    res.send({
        msg: "this is another route",
    });
});

// echo a json response
app.post("/echo", (req, res) => {
    res.send({
        body: req.body,
    });
});

// auth guard requests, with a header
app.use((req, res, next) => {
    if (req.headers.authorization === "true") {
        next();
    } else {
        res.sendStatus(401);
    }
});

app.get("/authenticated", (req, res) => {
    res.send({
        authenticated: true,
    });
});

export {
    app,
};
