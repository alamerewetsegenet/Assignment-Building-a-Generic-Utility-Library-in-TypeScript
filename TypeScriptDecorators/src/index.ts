import { MyTestClass } from './MyTestClass';
import { SimpleLogger } from './decoratorsSimpleLogger';

const MyTestClassWithLogger = SimpleLogger(MyTestClass);

const myObj = new MyTestClassWithLogger("value1", 42);
console.log(myObj.property1); // Output: value1
console.log(myObj.property2); // Output: 42

myObj.method1(); // Output: Method 1 called
myObj.method2(); // Output: Method 2 called

export {};
