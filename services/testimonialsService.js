import Testimonials from "../models/testimonialsModel.js"

export const create = async (nama, jabatan, perusahaan, email, layanan, testimoni) => {
    await Testimonials.create({
        nama, 
        jabatan, 
        perusahaan, 
        email, 
        layanan, 
        testimoni
    });
};

export const getById = async (id) => {
    return await Testimonials.findOne({
        // bisa {id} lsg kalau dengan parameter sama nama
        where: { id : id },
        // attributes: ['id', 'nama'],
    });
};

export const getAll = async () => {
    return await Testimonials.findAll();
};