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

export const myPop = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
    }
    let penultima = count - 1;

    let newArray = [];

    for (let j = 0; j < penultima; j++) {
        myPush(newArray, array[j]);
    }
    return newArray;
};
