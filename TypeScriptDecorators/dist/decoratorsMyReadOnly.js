"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MyReadOnly(target, propertyKey, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
exports.default = MyReadOnly;
