import FakeLibraryClass from "fakelibrary";

export default class FakeLibraryConsumerClass extends FakeLibraryClass {
    public constructor() {
        super();
        this.foo();
    }    
}

let testInstance = new FakeLibraryConsumerClass();
