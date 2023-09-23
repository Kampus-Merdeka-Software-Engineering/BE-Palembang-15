const express = require('express');
const bodyParser = require('body-parser');
const coursesRouter = require('./src/routes/coursesRoutes.js');

const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());


app.use('/courses', coursesRouter);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})