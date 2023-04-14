const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/producto', require('./routes/producto'));

app.listen(3000, () => console.log("Listening on port"))