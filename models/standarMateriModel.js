import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Courses from "./coursesModel.js";

const standarMateri = sequelize.define("StandarMateri", {
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
    logoPerusahaan: DataTypes.STRING,
});


Courses.hasMany(standarMateri, {
    foreignKey: {
        allowNull: false,
    },
});
standarMateri.belongsTo(Courses);
export default standarMateri;