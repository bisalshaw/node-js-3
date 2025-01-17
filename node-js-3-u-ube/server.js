/*0-comment-start 
 
 const http = require('http');

const server = http.createServer((req, res) => {
// logging middleware

console.log(`Received request for ${req.url}`);


0-comment-end-*/








//1st comment=start


  /*  // Handle requests and respond with the appropriate response
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the website');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About us page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});    */
//1st comment=end


//2nd comment=start

/*

if  (req.url === '/') {
    res.end('This is the root endpoint');
} else if (req.url === '/users') {
    // handle the users endpoint
    res.end('This is the users endpoint')
} else if(req.url === '/products'){
    //handle the products endpoint
    res.end('This is the products endpoint');
    }else {
    //   handle the endpoints or returns a 404 response 
    res.statusCode = 404;
    res.setHeader('Content-Tpe', 'text/plain');
    res.end('Page not found')
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});











const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true,});

//Defining a mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,


});

//creating a mongoose model
const User = mongoose.model('User', userSchema);

//saving a new document to the database
const newUser = new User({
    name: 'John Doe',
    email: 'johndoeexample.com',
    age:25,
});

newUser.save()
.then(() => console.log('user saved sucessfully'))
.catch(err=> console.error('Error saving user', err));


2nd comment-end*/

//------------------------------------------------
 /*
const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello, Express.js!!');
})

app.listen(3000, () => {
    console.log('Server is running on 3000')
})

*/
//---------------------------------



const express = require('express');
const app = express(); 

//Implemeenting authentication middleware 
const authentication = (req,res,next) => {
    //Assume the user is authenticated for simplicity
    console.log('User Authenticated');
    next();
};




app.get('/dashboard', authentication, (req, res) => {
    res.send('Welcome to the dashboard!')
})




app.listen(3000, () => {
    console.log('Server is running on 3000')
})