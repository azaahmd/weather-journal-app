# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

in server.js file ,by set up server as alocal host on my pc's port #8080.
installed node , express and  body-parser are installed.

In the file app.js, the element with the id of generate should have 
an addEventListener() method called on it, with click as the first parameter, 
and a named callback function as the second parameter.//  callback function to execute when it is clicked.
Use click event listener on the Generate Button (‘click’, handleGenerateBtnClick);

inside handleGenerateBtnClick use if else to check that user enter the zipcode 
in else , will call the function that get the weather from the site , and postdata that post data in server.


## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.
