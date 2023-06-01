
const mongoose= require("mongoose")
const express= require("express")
// const dotenv = require('dotenv')
// dotenv.config({path:'./config.env'})
const bookHandler = require ('./routers/api')


const app = express();
app.use(express.json())

// database connection with mongodb
mongoose.connect("mongodb://localhost:27017/bookApi", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


  app.use("/bookApi",bookHandler)

  function errorHandler(err,req,res,next){
    if (res.headersSent){
        return next (err);
    }
        res.status(500).json({error:err});
  }



  const port = 6000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});