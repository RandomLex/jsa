import {User} from './lab01.mjs';
import {Student, Teacher} from './lab02.mjs';

export class ExtendedUser extends User {
  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(fullName) {
    const parts = fullName.split(' ');
    this.name = parts[0];
    this.surname = parts[1];
  }

  static match(teacher, student, courseName) {
    const result = [];

    function pushCourseIfExists(course) {
      if (teacher._courses[course] >= student._courses[course]) {
        result.push({course: course, level: student._courses[course]});
      }
    }

    if (courseName) {
      pushCourseIfExists(courseName);
      } else {
        for (const course in teacher._courses) {
          pushCourseIfExists(course);
        }
      }
    return result;
  }
}


let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}
