const mongoose= require('mongoose');
// Create a Book schema
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    description: String
  });
  
  // Create a Book model
  const modelBook = mongoose.model('modelBook', bookSchema);
  module.exports= modelBook