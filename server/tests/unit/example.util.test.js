const sum = (a, b) => a + b; // example utility; in your app import instead


test('sum adds numbers', () => {
expect(sum(1,2)).toBe(3);
});