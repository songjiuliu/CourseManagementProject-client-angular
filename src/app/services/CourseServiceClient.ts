import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/courses')
      .then(response => response.json());
  createCourse = async (course) =>
  {
    const response = await fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/courses', {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
    return await response.json()
  }
deleteCourse = async (courseId) => {
    const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/songjiu/courses/${courseId}`, {
      method: 'DELETE'
    })
    return await response.json()
  }
  findCourseById = (cid) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/courses/'+cid)
      .then(response => response.json());
  findModuleById = (mid) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/modules/'+mid)
      .then(response => response.json());
  findModulesForCourse = (cid) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/courses/'+cid+'/modules')
      .then(response => response.json());
  findLessonsForModule = (mid) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/modules/'+mid+'/lessons')
      .then(response => response.json());
  findTopicsForLesson= (lid) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/songjiu/lessons/'+lid+'/topics')
      .then(response => response.json());

}
