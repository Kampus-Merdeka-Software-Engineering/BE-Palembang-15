import StandarMateri from "../models/standarMateriModel.js"

export const getById = async (id) => {
    return await StandarMateri.findOne({
        // bisa {id} lsg kalau dengan parameter sama nama
        where: { id : id },
        // attributes: ['id', 'nama'],
    });
};

export const getAll = async () => {
    return await StandarMateri.findAll();
};

export const getByCourseId = async (courseId) => {
    return await StandarMateri.findAll({
        where: { courseId },
    });
};