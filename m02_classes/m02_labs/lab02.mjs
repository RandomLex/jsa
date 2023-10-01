import {User} from './lab01.mjs';

class ExtendedUser extends User {
  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(fullName) {
    const parts = fullName.split(' ');
    this.name = parts[0];
    this.surname = parts[1];
  }
}

export class Student extends ExtendedUser {
  constructor({name, surname, email}) {
    super({name, surname, email, role: 'student'});
  }
}

export class Teacher extends ExtendedUser {
  constructor({name, surname, email}) {
    super({name, surname, email, role: 'teacher'});
  }
}

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses
