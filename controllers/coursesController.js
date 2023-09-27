import express from "express";
import { getById, getAll} from "../services/coursesService.js";

let coursesData = [
  {
    id_course: 1,
    thumbnail: '',
    judul_course: 'Microsoft Excel',
    standar_materi: ['image/Astra Logo 1.png', 'image/Bank_Central_Asia 1.png', 'image/download 1.png'],
    skill_diperoleh: 'Membuat formula unik, Membuat data validation, Mengetahui tabel pivot',
    rating: 4.9,
    ulasan: '50.6k',
    tingkat: 'Beginner, Professional Certificate',
    popularitas: 4
  },
  {
    id_course: 2,
    thumbnail: '',
    judul_course: 'Digital Marketing',
    standar_materi: ['image/emtek.png', 'image/lazada.png', 'image/kompas.png'],
    skill_diperoleh: 'SEO, SEM, PPC, content marketing, social media marketing, email marketing, Meta Ads',
    rating: 4.9,
    ulasan: '46.5k',
    tingkat: 'Beginner, Professional Certificate',
    popularitas: 3
  },
  {
    id_course: 3,
    thumbnail: '',
    judul_course: 'UI/UX Design',
    standar_materi: ['image/telkom.png', 'image/Shopee 1.png', 'image/goto.png'],
    skill_diperoleh: 'Prototyping, Desain Interaktif, Desain Visual dan Estetika, Psikologi Desain',
    rating: 4.8,
    ulasan: '40.3k',
    tingkat: 'Beginner, Professional Certificate',
    popularitas: 2
  },
  {
    id_course: 4,
    thumbnail: '',
    judul_course: 'Data Analytics',
    standar_materi: ['image/unilever.png', 'image/pertamina.png', 'image/Nestle 1.png'],
    skill_diperoleh: 'SQL, Python, Data Visualization, membuat script, mengambil data, dan memproses data',
    rating: 4.8,
    ulasan: '50.6k',
    tingkat: 'Beginner, Professional Certificate',
    popularitas: 1
  },
];
//sementara nnti pindah db

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getAllCourses = async (req, res) => {
  const CoursesList = await getAll();

  res.json({
    data: CoursesList,
    message: "Data successfully retrieved",
  })
};
  
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getCoursesById = async(req, res) => {

  const courses = await getById(req.params.id);
  res.json({
    data: courses,
    message: "Data successfully retrieved",
  })
};

export default {
    getAllCourses,
    getCoursesById,
};
  