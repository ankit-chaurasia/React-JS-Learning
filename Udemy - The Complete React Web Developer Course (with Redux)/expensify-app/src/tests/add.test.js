const add = (a, b) => a + b;

test('should add two number', () => {
    const result = add(3, 4);
    // if( result !== 7) {
    //     throw new Error(`You added 3 and 4. The result was ${result}. Expected 7.`);
    // }
    // jest provide global method to check the expected result
    expect(result).toBe(7);
});