const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes');
const cors = require('cors');
const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/uploads",express.static("uploads"));
app.use('/api',api);
app.listen(PORT, function() {
    console.log("Server running on " + PORT);
})
