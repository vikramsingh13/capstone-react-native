/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["asdf"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_PATH
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


//@desc Get user settings
//@path GET /user/:userId
//access PRIVATE
app.get('/users/:userId', function(req, res) {
  //Sending dummy data now to test
  res.json({success: 'get call succeed!', url: req.url, userSettings: {userId: req.param.userId, height: 100, weight: 100, goal: "lose"}});
});

/*No need for this right now 
app.get('/users/:userId/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});
*/

//@desc post user settings
//@path POST /user/:userId
//access PRIVATE
app.post('/users/:userId', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/*
app.post('/users/:userId/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});*/

//@desc put user settings
//@path PUT /user/:userId
//access PRIVATE
app.put('/users/:userId', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/*
app.put('/users/:userId/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});*/

//@desc delete user settings
//@path DELETE /user/:userId
//access PRIVATE
app.delete('/users/:userId', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

/*
app.delete('/users/:userId/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});*/

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
