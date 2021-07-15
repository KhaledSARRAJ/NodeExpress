const express = require('express');
const mongoose = require('mongoose');
const productRouter = require("./productRoute");

const app = express();
//database connexion
const dbURl ='mongodb+srv://khaled:root@cluster0.jrgxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURl,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true})
    .then((result)=>app.listen(3000))
.catch(err=> console.log(err));
// middleware
app.use(express.json());

app.use('/product', productRouter);


