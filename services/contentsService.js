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

export const getByCourseId = async (courseId) => {
    return await Contents.findAll({
        where: { courseId },
    });
};

export const getByEpisode = async (courseId, episode) => {
    return await Contents.findAll({
      where: {
        courseId: courseId,
        episode: episode
      }
    });
  };