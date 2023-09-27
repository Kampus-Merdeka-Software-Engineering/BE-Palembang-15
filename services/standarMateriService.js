import StandarMateri from "../models/StandarMateriModel.js"

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