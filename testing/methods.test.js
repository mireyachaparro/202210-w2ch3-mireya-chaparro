import { myPush } from './methods.js';
import { myLength } from './methods.js';

describe('given push function', () => {
    test('when push pepa should be pepe,pepa', () => {
        const array = ['pepe'];
        const value = 'pepa';
        const expectedResult = ['pepe', 'pepa'];
        //Act
        const result = myPush(array, value);
        //Asset
        expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
    });
    test('when is 4,4 should be length 2', () => {
        const array = ['pepe', 'pepa'];
        const expectedResult = 2;
        //Act
        const result = myLength(array);
        //Asset
        expect(result).toBe(expectedResult);
    });
});
