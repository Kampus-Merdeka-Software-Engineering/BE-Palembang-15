import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import standarMateri from "./standarMateriModel.js";

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

Courses.hasMany(standarMateri);
standarMateri.belongsTo(Courses);
export default Courses;