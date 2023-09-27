import videoComments from "../models/videoCommentsModel.js"

export const create = async (nama, email, jabatan, komentar) => {
    await videoComments.create({
        nama,
        email,
        jabatan,
        komentar,
    });
};

export const getById = async (id) => {
    return await videoComments.findOne({
        // bisa {id} lsg kalau dengan parameter sama nama
        where: { id : id },
        // attributes: ['id', 'nama'],
    });
};

export const getAll = async () => {
    return await videoComments.findAll();
};