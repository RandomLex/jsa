class TestClass {
  constructor(arg) {
    this.arg = arg;
    console.log(this.arg);
  };

  showSth() {
    console.log("I'm prototyped!");
  };

  static showSth() {
    console.log(`Hi, I'm static!`);
  };
}

let test = new TestClass("Hello");
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!

console.log(test instanceof TestClass);

let Test = function(arg) {
  this.arg = arg;
  console.log(this.arg);
}

Test.prototype.showSth = function() {
  console.log("I'm prototyped!");
}

Test.showSth = function() {
  console.log(`Hi, I'm static!`);
}

let test2 = new Test("Hello");
test2.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!
console.log(test2 instanceof Test); // -> true

let Test3 = function(arg) {
  this.arg = arg;
  console.log(this.arg);
  this.showSth = function() {
    console.log("I'm prototyped!");
  }
}
Test.showSth = function() {
  console.log(`Hi, I'm static!`);
}