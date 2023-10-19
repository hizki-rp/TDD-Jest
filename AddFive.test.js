const addFive = require('./AddFive');

test("returns the number plus 5", ()=>{
    expect(addFive(5)).toBe(10);
})