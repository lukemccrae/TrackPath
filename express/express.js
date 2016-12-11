// var express = require('express')
// var app = express();
//
// app.listen(3000, function() {
//     console.log("Listening on port 3000");
// })
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var puppies = []; //database, probably usually an object?

app.use(cors());
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

app.use(bodyParser.json());
app.listen(3000, function() {
        console.log("Listening on port 3000");
        console.log(puppies);
    })
    // ^^^^ this is the server?????
    //create our database

//read all resources

app.get('/puppies', function(req, res, next) {
    console.log(puppies);
    res.json(puppies);
})

//read one resource
app.get('/puppies/:id', function(req, res, next) { // this is a get request. it takes in an 'id' parameter. the colon in ':id' is part of the way express reads the code to know
        console.log(puppies);
        if (puppies[req.params.id]) { // conditional. if its truthy, do the code block. requests.params IS THE OBJECT KEYS
            res.json(puppies[req.params.id])
        } else {
            res.status(404);
            res.send("not found");
        }
    })
    //post a resource
app.post('/comments', function(req, res, next) { //server receives request, sends back response (res) to the client
    console.log(req.body);
    var puppy = {
        // id: puppies.length,
        "date": req.body.date,
        "hour": req.body.hour,
        "minute": req.body.minute,
        "day": req.body.day,
        "month": req.body.month,
        "year": req.body.year,
        lat: req.body.lat,
        long: req.body.long
    }
    puppies.push(puppy);
    res.json(puppy);
})
