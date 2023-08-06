const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = 5991;

app.listen(port, () => {
  console.log(`Our server is runing on ${port}`);
});
