class MyTestClass {
    private _property1: string;
    private _property2: number;

    constructor(property1: string, property2: number) {
        this._property1 = property1;
        this._property2 = property2;
    }

    method1(): void {
        console.log("Method 1 called");
    }

    method2(): void {
        console.log("Method 2 called");
    }

    get property1(): string {
        return this._property1;
    }

    get property2(): number {
        return this._property2;
    }
}

export { MyTestClass };
