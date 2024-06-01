"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyTestClass_1 = require("./MyTestClass");
var decoratorsSimpleLogger_1 = require("./decoratorsSimpleLogger");
var MyTestClassWithLogger = (0, decoratorsSimpleLogger_1.SimpleLogger)(MyTestClass_1.MyTestClass);
var myObj = new MyTestClassWithLogger("value1", 42);
console.log(myObj.property1); // Output: value1
console.log(myObj.property2); // Output: 42
myObj.method1(); // Output: Method 1 called
myObj.method2(); // Output: Method 2 called
