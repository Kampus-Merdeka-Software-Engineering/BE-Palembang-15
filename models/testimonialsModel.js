import { DataTypes } from "sequelize";

const Testimonials = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    perusahaan: DataTypes.STRING,
    email: DataTypes.STRING,
    layanan: DataTypes.STRING,
    testimoni: DataTypes.STRING,

};

export default Testimonials;