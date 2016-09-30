"use strict";
const fakelibrary_1 = require("fakelibrary");
class FakeLibraryConsumerClass extends fakelibrary_1.default {
    constructor() {
        super();
        this.foo();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FakeLibraryConsumerClass;
let testInstance = new FakeLibraryConsumerClass();
