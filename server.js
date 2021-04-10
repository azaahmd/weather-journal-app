// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();


/* Middleware*//* Dependencies */
//Here we are configuring express to use body-parser as middle-ware.//const bodyParser = require('body-parser')
////app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;

const server = app.listen(port, listening); 
//const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
//callback to debug
function listening() {
    console.log("server running ");
    console.log(`running on local host :${port}`);

};


//get route which getall with a callback function get data and is going to send back to it  the projectData
app.get('/all',function (request,response){

    response.send(projectData);
    console.log(projectData);
});



// to push the information we got it 
app.post('/add', addData);

function addData(req,res){
    console.log(req.body);
  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content,
  }
  projectData = newEntry;
  res.send(projectData);
 //to show the requested body comes from the API on console
}
