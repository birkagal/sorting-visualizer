import { ANIMATION_OPERATIONS } from "../consts";

export const shakerSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [],
        left = 0,
        right = array.length - 1;

    while (left < right) {
        for (let i = left; i < right; i++) {
            animations.push([ANIMATION_OPERATIONS.CHANGE_COLOR, i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push([ANIMATION_OPERATIONS.SWAP_VALUE, i, array[i + 1], i + 1, array[i]]);
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }

        right--;

        for (let j = right; j > left; j--) {
            animations.push([ANIMATION_OPERATIONS.CHANGE_COLOR, j, j - 1]);
            if (array[j] < array[j - 1]) {
                animations.push([ANIMATION_OPERATIONS.SWAP_VALUE, j, array[j - 1], j - 1, array[j]]);
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }

        left++;
    }
    return animations;
}