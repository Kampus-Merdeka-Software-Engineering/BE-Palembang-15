import Contents from "../models/contentsModel.js"

export const getById = async (id) => {
    return await Contents.findOne({
        // bisa {id} lsg kalau dengan parameter sama nama
        where: { id : id },
        // attributes: ['id', 'nama'],
    });
};

export const getAll = async () => {
    return await Contents.findAll();
};