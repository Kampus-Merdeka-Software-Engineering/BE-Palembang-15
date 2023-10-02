import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Contents from "./contentsModel.js";

const videoComments = sequelize.define("Comments", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    komentar: DataTypes.TEXT,
})

//Contents - videoComments (1 to many)
Contents.hasMany(videoComments);
videoComments.belongsTo(Contents);

export default videoComments;