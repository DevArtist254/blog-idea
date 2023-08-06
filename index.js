require('dotenv').config({path: './env.config'});
const mongoose = require('mongoose');
const app = require('./app');
const port = 2540;

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.DB_CONNECT}`);

    console.log(`Success on DB connection`);
  } catch (error) {
    console.log(`${error.message}`);
  }
}

//connectDB();

app.listen(port, () => {
  console.log(`Our server is runing on ${port}`);
});
