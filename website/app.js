/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

//Acquire API credentials from OpenWeatherMap website. Use your credentials 
//and the base url to create global variables at the top of your app.js code.

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=3983a52235909fea85fedf26dfe90e89';

//In the file app.js, the element with the id of generate should have 
//an addEventListener() method called on it, with click as the first parameter, 
//and a named callback function as the second parameter.//  callback function to execute when it is clicked.
//Use click event listener on the Generate Button (‘click’, handleGenerateBtnClick);


document.getElementById('generate').addEventListener('click', handleGenerateBtnClick);
function handleGenerateBtnClick(e) {

    const newzip = document.getElementById('zip').value; //to get zip value
    const feelings = document.getElementById('feelings').value; //to get feeling value

    if(!newzip || !feelings){
        alert("zipcode and feelings should not be empty");
       }

    else {
        getTheWeather(baseURL, newzip, apiKey)
        .then(function (data) {
         postData("/add", {date: newDate, temp: data.main.temp, content: feelings});
       })    //wait untill get the data then post the data then update UI
        .then(() => {
         updateUI();
       })
      }

    }
const getTheWeather = async (baseURL, zip, apikey) => {
    const request = await fetch(baseURL + zip + apikey) //fetch to call the webAPI

    try {

        const data = await request.json();
        return data;
        //try is what happend if everythng goes well
    } catch (error) {
        // appropriately handle the error
        console.log("error", error);
    }
}
// TO Post data 
const postData = async (url = '', data = {}) => { //will use url of post route in server 
    // data is object holding the data to post

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}




//update UI which will show the all data on the broswer by using get request throw /all route 
const updateUI = async () => {
    const request = await fetch('/all'); //fetch to call the webAPI
    //try is what happend if everythng goes well
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
        document.getElementById('content').innerHTML = `Feellings: ${allData.content}`;
        // appropriately handle the error
    } catch (error) {
        console.log("error", error);
    }
}

