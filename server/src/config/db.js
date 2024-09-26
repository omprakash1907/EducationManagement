const mongoose = require('mongoose');
const Config = require('.');

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return; 
  }
  try {
    await mongoose.connect(Config.MONGO_URI);
    console.log('Database connected 🚀');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

module.exports = connectDB;

