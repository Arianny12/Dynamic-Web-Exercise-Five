const express = require ('express');
const app = express();
const firebase = require("firebase/app");

const port = 4000;


const firebaseConfig = {
  apiKey: "AIzaSyAMosI3lZvlZjDbhqMW88sLCPBdC2v8oZI",
  authDomain: "exercise-five-187b6.firebaseapp.com",
  projectId: "exercise-five-187b6",
  storageBucket: "exercise-five-187b6.appspot.com",
  messagingSenderId: "1017900332081",
  appId: "1:1017900332081:web:6837971d952c874c699110",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');


app.use ("/",indexRoute);
app.use ("/post",singlePostRoute);
app.use("/create", createPostRoute);
app.listen(port, () => {
    console.log(`exercise five on the port ${port}`);
});