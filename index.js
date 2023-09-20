import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());


app.get('/courses', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})