import {Student, Teacher} from './lab02.mjs';
import {ExtendedUser} from './lab03.mjs';

export class Tutoring {
  constructor() {
    this.students = [];
    this.teachers = [];
  }

  static #getByName(name, surname, namedArray) {
    return namedArray.find(value => value.name === name && value.surname === surname);
  }

  getStudentByName(name, surname) {
    return Tutoring.#getByName(name, surname, this.students);
  }

  getTeacherByName(name, surname) {
    return Tutoring.#getByName(name, surname, this.teachers);
  }

  addStudent(name, surname, email) {
    if (!this.getStudentByName(name, surname)) {
      this.students.push(new Student({name, surname, email}));
    }
  }

  addTeacher(name, surname, email) {
    if (!this.getTeacherByName(name, surname)) {
      this.teachers.push(new Teacher({name, surname, email}));
    }
  }

  getTeacherForStudent(student) {
    return this.teachers.filter(teacher => ExtendedUser.match(teacher, student).length > 0);
  }

  getStudentsForTeacher(teacher) {
    return this.students.filter(student => ExtendedUser.match(teacher, student).length > 0);
  }

}

console.log('----------- Tutoring ------------')
let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...
