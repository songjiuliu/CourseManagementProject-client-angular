import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/courses')
      .then(response => response.json());
  findAllQuizzes= () =>
    fetch('http://secret-peak-23970.herokuapp.com/api/quizzes')
      .then(response => response.json());
  createCourse = async (course) =>
  {
    const response = await fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/courses', {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
    return await response.json()
  }
deleteCourse = async (courseId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/songjiu/courses/${courseId}`, {
      method: 'DELETE'
    })
    return await response.json()
  }
  findQuestionsForQuiz= (qid)=>
    fetch('http://secret-peak-23970.herokuapp.com/api/quizzes/'+qid+'/questions')
      .then(response => response.json());
  findCourseById = (cid) =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/courses/'+cid)
      .then(response => response.json());
  findModuleById = (mid) =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/modules/'+mid)
      .then(response => response.json());
  findModulesForCourse = (cid) =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/courses/'+cid+'/modules')
      .then(response => response.json());
  findLessonsForModule = (mid) =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/modules/'+mid+'/lessons')
      .then(response => response.json());
  findTopicsForLesson= (lid) =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/songjiu/lessons/'+lid+'/topics')
      .then(response => response.json());


}
