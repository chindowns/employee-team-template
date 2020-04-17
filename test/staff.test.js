const Staff = require("../lib/staff");

describe("Employee", () => {
    describe("Create Employee Constructor", () =>{
        it("Instantiate new employee when the constructor is called",() => {
            let staff = new Staff();

            expect(typeof(staff)).toBe("object");


        });
    });
});