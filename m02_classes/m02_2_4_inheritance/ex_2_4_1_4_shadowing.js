class ClassA {
  constructor(param) {
    console.log('ClassA constructor', param);
  }
  sound() {
    console.log('ClassA sound');
  }
}

class ClassB extends ClassA {
  constructor(title) {
    super('param from child');
    this.title = title;
  }
  sound() {
    console.log(`ClassB sound: ${this.title}`)
  }
  newSound() {
    console.log('New sound');
  }
  oldSound() {
    super.sound();
  }
}
const obj = new ClassB('Alex');
obj.sound();
obj.newSound();
obj.oldSound();