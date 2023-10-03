import sequelize from "../config/sequelize.js";
import "../models/index.js";

export const startSequelize = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection to database succesful!");
    } catch(e){
        console.error("Connection to database failure!", e);
    }

}