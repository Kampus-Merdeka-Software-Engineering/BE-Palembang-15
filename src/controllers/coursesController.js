let coursesData = [
    { 
        id: 1, 
        title: 'Microsoft Excel' 
    },
    { 
        id: 2,
        title: 'Digital Marketing'
    },
];
//sementara aj

const getAllCourses = (_, res) => {
    try {
        res.json({
          data: coursesData,
          message: "Successfully retrieved courses!",
        });
      } catch (error) {
        res.status(500);
        res.json({
          message: "Internal server error!",
        });
      }
};
  
const getCourseById = (req, res) => {
    try {
        const { id } = req.params;
        const courses = coursesData[Number(id) - 1];
        if (!courses) {
          res.status(404);
          res.json({
            message: "Data not found",
          });
        }

        res.json({
          data: coursesData,
          message: "Successfully retreive courses!",
        });
      } catch (error) {
        res.status(500);
        res.json({
          message: "Internal server error!",
        });
    }
};
  
module.exports = {
    getAllCourses,
    getCourseById,
};
  