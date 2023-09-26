import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { startSequelize } from "./utils/startSequelize.js";
import coursesRouter from "./src/routes/coursesRoutes.js";
import contentsRouter from "./src/routes/contentsRoutes.js";
import testimonialsRouter from "./src/routes/testimonialsRoutes.js";
import commentsRouter from "./src/routes/videoCommentsRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

startSequelize();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());


app.use('/courses', coursesRouter);
app.use('/contents', contentsRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/contents', commentsRouter);

//middleware (harus di bawah setelah eksekusi API)
app.use((error, request, response, next) => {
    response.status(500).json({
        message: "Internal server error!"    
    });
    console.log(error);
    next();
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})