require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookie = require('cookie-parser')

//require component
const authRoutes = require('./routes/authRoutes')


//set up server
const app = express('');
const port = 3012;
app.listen(port, ()=>console.log('http://localhost:'+port));

app.use(cookie());
app.use(cors());
// const corsOptions = {
//     origin: 'http://localhost:3000/', 
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions))

app.use(express.json()); // for data json
app.use(express.urlencoded({extended:false})); // for  data http

//connect to mongodb
mongoose.connect(process.env.DATABAS,{useUnifiedTopology: true ,useNewUrlParser: true })
.then(()=> console.log('server connect'))
.catch(()=> console.log('err server'))





//Router
app.use('/api',authRoutes);


