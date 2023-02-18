import { CHANGE_COLOR, OVERWRITE_VALUE } from "../consts";

export const mergeSort = (
    array: Array<number>
) => {
    const animations: Array<Array<number | string>> = [];
    if (array.length <= 1) return array;
    const auxiliary = array.slice();
    mergeHelper(array, 0, array.length - 1, auxiliary, animations);
    return animations;
}

const mergeHelper = (
    array: Array<number>,
    start: number,
    end: number,
    auxiliary: Array<number>,
    animations: Array<Array<number | string>>,
) => {
    if (start === end) return;
    const middle = Math.floor((start + end) / 2);
    mergeHelper(auxiliary, start, middle, array, animations);
    mergeHelper(auxiliary, middle + 1, end, array, animations);
    merge(array, start, middle, end, auxiliary, animations);
}

const merge = (
    array: Array<number>,
    start: number,
    middle: number,
    end: number,
    auxiliary: Array<number>,
    animations: Array<Array<number | string>>,
) => {
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([CHANGE_COLOR, i, j]);
        if (auxiliary[i] <= auxiliary[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([OVERWRITE_VALUE, k, auxiliary[i]]);
            array[k++] = auxiliary[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([OVERWRITE_VALUE, k, auxiliary[j]]);
            array[k++] = auxiliary[j++];
        }
    }
    while (i <= middle) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([CHANGE_COLOR, i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([OVERWRITE_VALUE, k, auxiliary[i]]);
        array[k++] = auxiliary[i++];
    }
    while (j <= end) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([CHANGE_COLOR, j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([OVERWRITE_VALUE, k, auxiliary[j]]);
        array[k++] = auxiliary[j++];
    }
}
