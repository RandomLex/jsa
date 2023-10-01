class ClassA {
  constructor(param) {
    console.log('ClassA constructor', param);
  }
  print() {
    console.log('ClassA print');
  }
  static staticPrint() {
    console.log('ClassA static print');
  }
}
let obj = new ClassA(100);
obj.print();
ClassA.staticPrint();
// obj.staticPrint(); // TypeError: obj.staticPrint is not a function