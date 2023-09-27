import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Testimonials = sequelize.define("Testimonials", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    perusahaan: DataTypes.STRING,
    email: DataTypes.STRING,
    layanan: DataTypes.STRING,
    testimoni: DataTypes.STRING,
});

export default Testimonials;