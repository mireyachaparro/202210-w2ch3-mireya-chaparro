import { myPush } from './methods.js';

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
});
