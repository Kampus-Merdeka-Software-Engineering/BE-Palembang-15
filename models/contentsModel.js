import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Courses from "./coursesModel.js";

const Contents = sequelize.define("Contents", {
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
    judulContent: DataTypes.STRING,
    video: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    episode: DataTypes.INTEGER,
});

Courses.hasMany(Contents, {
    foreignKey: {
        allowNull: false,
    },   
});
Contents.belongsTo(Courses);

export default Contents;