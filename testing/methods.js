export const myPush = (array, value) => {
    array[array.length] = value;
    return array;
};

export const myLength = (array) => {
    let i = 0;
    array.forEach(() => {
        i++;
    });
    return i;
};
