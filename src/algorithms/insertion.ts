import { ANIMATION_OPERATIONS } from "../consts";

export const insertionSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [],
        j: number,
        key: number;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            animations.push([ANIMATION_OPERATIONS.CHANGE_COLOR, j + 1, j]);
            animations.push([ANIMATION_OPERATIONS.OVERWRITE_VALUE, j + 1, array[j]]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([ANIMATION_OPERATIONS.OVERWRITE_VALUE, j + 1, key]);
        array[j + 1] = key;
    }
    return animations;
}