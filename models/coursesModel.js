import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Courses = sequelize.define("Courses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    thumbnail: DataTypes.STRING,
    judulCourse: DataTypes.STRING,
    skillDiperoleh: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    ulasan: DataTypes.STRING,
    tingkat: DataTypes.STRING,
    popularitas: DataTypes.INTEGER,
});


export default Courses;