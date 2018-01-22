describe("hellotest", () => {
    it('checks if hellotest is hellotest', () => expect('hellotest').toBe('hellotest'))

    it('checks if hellotest is not hellotest', () => expect('hellotest').not.toBe('hellotest123'))

})

describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});

describe("A spec", function () {
    it("is just a function, so it can contain any code", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});