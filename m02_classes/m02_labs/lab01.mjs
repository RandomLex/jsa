//Scenario
// Try to prepare a simple system to store information about students and teachers and combine them for tutoring.
//
// Create a User class to create objects for both teachers and students. The constructor should take the user data
// (name, surname, email, role), but be sure to create the appropriate properties.
//
// Additionally, create the following methods:
//
// addCourse(course, level) - which will allow you to add course (e.g. math) and level
// (e.g. 2 - the higher the number, the higher the level);
// in the case of a student, it will mean that they are looking for help on this level,
// and in case of a teacher, it will mean that they can help up to this level;
// removeCourse(course) - which will allow you to remove the course
// (e.g. if the student is no longer interested in learning math)
// editCourse(course, level) - which will allow you to change the level associated with the course;
// sendMessage(from, message) - which will allow you to send a 'message' message from user 'from'
// to the user described in the object; complete information about the sent message should be stored
// in the local cache (hint: use an array for this);
// the sending of the message itself will only be simulated,
// declare the function sendEmail(from, to, message) {} beforehand and use it in the appropriate place;
// showMessagesHistory() - which will display the history of all messages sent to the user in the console.


export class User {

  constructor({name, surname, email, role}) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this._courses = {};
    this.messages = [];
  }

  get courses() {
    const result = [];
    for (const course in this._courses) {
      result.push(course);
    }
    return result;
  }

  addCourse(course, level) {
    this._courses[course] = level;
  }

  removeCourse(course) {
    delete this._courses[course];
  }

  editCourse(course, level) {
    this.addCourse(course, level);
  }

  #sendEmail(from, to, message) {
    return `${from} -> ${to}: ${message}`
  }

  sendMessage(from, message) {
    this.messages.push(this.#sendEmail(from.email, this.email, message));
  }

  showMessagesHistory() {
    this.messages.forEach(message => console.log(message));
  }
}

let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();