const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

const students = [
  {
    name: "Test name 1",
    id: 1,
  },
  {
    name: "Test name 2",
    id: 2,
  },
  {
    name: "Test name 3",
    id: 3,
  },
  {
    name: "Test name 4",
    id: 4,
  },
  {
    name: "Test name 5",
    id: 5,
  },
];

const courses = [
  {
    id: 1,
    name: "frontend",
    students: [
      {
        id: 1,
        grades: [10, 9, 8, 10],
      },
      {
        id: 2,
        grades: [7, 9, 8, 10],
      },
      {
        id: 3,
        grades: [10, 9, 8, 4],
      },
    ],
  },
  {
    id: 2,
    name: "socialMedia",
    students: [
      {
        id: 5,
        grades: [6, 7, 8],
      },
      {
        id: 1,
        grades: [],
      },
    ],
  },
  {
    id: 3,
    name: "graphicDesign",
    students: [
      { id: 3, grades: [4, 4] },
      { id: 5, grades: [] },
      { id: 2, grades: [6, 6, 6] },
    ],
  },
];

//1. get all students
// -> fetch students

//*** 2. get all courses
//-> fetch courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

//get course by ID

app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.filter((course) => course.id === courseId)[0];
  if (course) {
    res.json(course);
  } else {
    res.status(404).json("Course not found");
  }
});
//3. create new student (form with existing courses with checkbox)
//-> refetch students
//4. create new course (form with existing students with checkbox)
//-> refetch courses

//6. -> click course, go to new of it's course
// -> fetch all student's courses
// -> add new student to course (existing or create new)

//5. add student to course
//-> select existing or create new

//6. get student names per course
//7. remove student from course
//8. give grade to student course
//9. get average of grades in student per course

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
