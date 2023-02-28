import express from 'express';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
//Express body-parser is an npm module used to process data sent in an HTTP request body. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body. Before the target controller receives an incoming request, these middleware routines handle it.
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req,res) =>{
    res.send('Welcome to Memories API');
})

// https://www.mongodb.com/cloud/atlas
// const CONNECTION_URL = 'mongodb+srv://faizan:faizan123@cluster0.5jqfhy4.mongodb.net/test?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('mongo atlas connected'))
.catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

