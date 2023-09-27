import { DataTypes } from "sequelize";

const Courses = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    thumbnail: DataTypes.STRING,
    judul: DataTypes.STRING,
};

export default Courses;