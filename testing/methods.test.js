import { myPush } from './methods.js';

describe('given push function', () => {
    test('when push pepa should be pepe,pepa', () => {
        const array = ['pepe'];
        const value = 'pepa';
        const expectedResult = ['pepe', 'pepa'];
        //Act
        const result = myPush(array, value);
        console.log(result);
        console.log(expectedResult);
        //Asset
        expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
    });
});
