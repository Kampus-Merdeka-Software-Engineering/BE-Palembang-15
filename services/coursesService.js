import Courses from "../models/coursesModel.js"

export const getById = async (id) => {
    return await Courses.findOne({
        // bisa {id} lsg kalau dengan parameter sama nama
        where: { id : id },
        // attributes: ['id', 'nama'],
    });
};

export const getAll = async () => {
    return await Courses.findAll();
};