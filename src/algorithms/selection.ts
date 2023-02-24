import { ANIMATION_OPERATIONS } from "../consts";

export const selectionSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [];

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            console.log('here');
            if (array[min] > array[j]) {
                animations.push([ANIMATION_OPERATIONS.CHANGE_COLOR, min, j]);
                min = j;
            }
        }
        if (i != min) {
            animations.push([ANIMATION_OPERATIONS.SWAP_VALUE, i, array[min], min, array[i]]);
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return animations;
}