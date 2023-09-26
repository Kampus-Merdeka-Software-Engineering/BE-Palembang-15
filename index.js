import express from "express";
import bodyParser from "body-parser";
import coursesRouter from "./src/routes/coursesRoutes.js";
import contentsRouter from "./src/routes/contentsRoutes.js";

const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());


app.use('/courses', coursesRouter);
app.use('/contents', contentsRouter);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})